module.exports = {
    plugins: {
        autoprefixer: {},
        "@njleonzhang/postcss-px-to-rem": {
            unitToConvert: "px",
            widthOfDesignLayout: 3840, // 设计稿的宽度
            unitPrecision: 3, // 十进制的单位.
            selectorBlackList: [".ignore", ".hairlines"], // 过滤那些不用转换的class
            minPixelValue: 1, // 设置要替换的最小像素值.
            mediaQuery: false, // 允许在媒体查询中转换px
        },
    },
};
