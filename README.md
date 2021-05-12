
### 在线体验
[在线体验](https://hangjob.github.io/flexible-pc/dist/index.html#/index)

### PC大屏适配

下载完，下来安装依赖

### 安装

```js
npm i
```

### 运行
```js
npm run serve
```
### 打包
```
npm run build
```

### 设置设计稿-转换rem
在根目录下的.postcssrc.js文件下 
```js
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
```
我们设计的设计的是3840px * 2160px的设计稿
![3840px-2160px.png](https://i.loli.net/2021/05/12/4a2VcCI8tj1YHny.png)


### 设置根节点字体
在main.js下，保证在屏幕缩放的过程中也是16:9的比列
```js
const dashboardFlexible = require('lib-flexible-for-dashboard');
dashboardFlexible.init(16/9)
```

### lib-flexible-for-dashboard

具体参考

[大屏上的全屏页面的自适应适配方案](https://www.njleonzhang.com/2018/08/15/flexible-pc-full-screen.html)


