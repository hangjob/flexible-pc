const env = process.env.NODE_ENV;
let apiurl = "";
let qzurl = "http://192.168.10.38:9042/api2"; // 正式

if (env === "development") {
    let api = window.localStorage.getItem("api");
    if (api) {
        apiurl = api;
    } else {
        apiurl = "/hxgapi";
    }
} else if (env === "test") {
    apiurl = "/testapi";
} else {
    apiurl = qzurl;
}

export default apiurl;

export { qzurl };
