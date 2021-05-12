const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启压缩

const isProduction = process.env.NODE_ENV === "production";

function resolve(dir) {
    return path.join(__dirname, dir);
}
const multiple = require("./src/build/multiple.js");
const proxyApis = require("./src/build/api.setting.js");

module.exports = {
    lintOnSave: false,
    pages: multiple,
    productionSourceMap: true,
    publicPath: "./",
    transpileDependencies: [],
    chainWebpack: (config) => {
        config.resolve.alias.set("@", resolve("src"));
        config.entry("main").add("babel-polyfill");
    },
    configureWebpack: (config) => {
        const plugins = [];
        if (isProduction) {
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path].gz[query]",
                    algorithm: "gzip",
                    test: /\.(js|css)$/, // 匹配文件名
                    threshold: 10000, // 对超过10k的数据压缩
                    deleteOriginalAssets: false, // 删除源文件
                    minRatio: 0.8, // 压缩比
                })
            );
        }
        return { plugins };
    },
    configureWebpack: {
        devtool: "source-map",
    },
    devServer: {
        open: false, // 自动启动浏览器
        host: "0.0.0.0", // localhost
        port: 9043, // 端口号
        https: false,
        hotOnly: false,
        inline: false,
        disableHostCheck: true,
        proxy: proxyApis,
    },
};
