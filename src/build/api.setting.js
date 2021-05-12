const proxyApis = {
    "/hxgapi": {
        name: "何兴国",
        target: "http://192.168.1.7:10180",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            "^/hxgapi": "/",
        },
    },
    "/lczapi": {
        name: "梁昌志",
        target: "http://192.168.1.15:10180",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            "^/lczapi": "/",
        },
    },
    "/wwjapi": {
        name: "翁武杰",
        target: "http://192.168.1.5:10180",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            "^/wwjapi": "/",
        },
    },
    "/wytapi": {
        name: "王贻亭",
        target: "http://192.168.1.40:10180",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            "^/wytapi": "/",
        },
    },
    "/nwcsapi": {
        name: "测试线",
        target: "http://192.168.10.38:9042/api2",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            "^/nwcsapi": "",
        },
    },
};

module.exports = proxyApis;
