/**
 *  1. 打包的入口 entry
 *  2. 打包的文件输出口 output
 *  3. 打包的规则 rules .vue vue-loader
 **/
const path = require("path")
const {VueLoaderPlugin} = require("vue-loader")

module.exports = {

    mode:"development", // 指定打包的方式，不需要压缩
    entry:{ //指定打包的文件的路径
        app:path.resolve(__dirname,"..","vue-jsx/main.js")
    },
    output: { //指定输出的文件
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"..","vue-jsx")
    },
    //webpack css js json vue
    resolve: {
        extensions: [".css",".js",".vue"]
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                query: {
                    "presets": ["@vue/babel-preset-jsx"]
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]

}
