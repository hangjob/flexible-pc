import axios from "axios";
import apiurl from "@/config/apiurl";

/**
 * 实例化
 * config是库的默认值，然后是实例的 defaults 属性，最后是请求设置的 config 参数。后者将优先于前者
 */
axios.defaults.timeout = 3600;
axios.defaults.baseURL = apiurl;

const http = axios.create({
    timeout: 1000 * 60,
    withCredentials: true, // 表示跨域请求时是否需要使用凭证
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
    },
});

/**
 * 请求拦截
 */
http.interceptors.request.use(
    (config) => {
        config.metadata = {
            startTime: new Date(),
        };
        if (config.cancelToken === undefined) {
            config.cancelToken = axios.defaultSource.token; // 给每个请求添加标识符
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
    async (response) => {
        if (response.data.code === "1") {
            response.data.duration = response.duration;
            return response.data;
        } else {
            return Promise.reject(response.data);
        }
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * 统一处理url
 */
function adornUrl(url) {
    return `${url}`;
}

const post = (url, params, config) => {
    return new Promise((resolve, reject) => {
        http.post(adornUrl(url), params, config)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        http.get(adornUrl(url), {
            params: params,
            ...config,
        })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

// 上传文件
const upload = (url, params, callback) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
            if (progressEvent.lengthComputable) {
                let complete =
                    ((progressEvent.loaded / progressEvent.total) * 100) | 0;
                callback &&
                    callback({
                        complete,
                        progressEvent,
                    });
            }
        },
    };
    return new Promise((resolve, reject) => {
        http.post(adornUrl(url), params, config)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const download = (url, params, file) => {
    return axios({
        method: "get",
        url: url, //后端下载接口地址
        responseType: "blob", // 设置接受的流格式
        params: {
            ...params,
        },
    }).then((res) => {
        handleExport(res.data, params);
    });

    function handleExport(data, params) {
        params.fileName = params.fileName ? params.fileName : "附件";
        let fileName = `${params.fileName}.${file.type}`;
        if (file.name) {
            fileName = file.name;
        }
        if (!data) {
            return;
        }
        let blob = new Blob([data], {
            type: "application/octet-stream",
        });
        if ("download" in document.createElement("a")) {
            // 不是IE浏览器
            let url = window.URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.style.display = "none";
            link.href = url;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // 下载完成移除元素
            window.URL.revokeObjectURL(url); // 释放掉blob对象
        } else {
            // IE 10+
            window.navigator.msSaveBlob(blob, fileName);
        }
    }
};

export { post, get, upload, download, http, axios };
