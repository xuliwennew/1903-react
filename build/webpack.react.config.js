/**
 *  1. 打包的入口 entry
 *  2. 打包的文件输出口 output
 *  3. 打包的规则 rules .vue vue-loader
 **/
const path = require("path")


module.exports = {

    mode:"development", // 指定打包的方式，不需要压缩
    entry:{ //指定打包的文件的路径
        app:path.resolve(__dirname,"..","single-component/main.js")
    },
    output: { //指定输出的文件
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"..","single-component")
    },
    //webpack css js json vue
    resolve: {
        extensions: [".css",".js",".jsx"]
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                loader:"babel-loader",
                query: {
                    "presets": ["@babel/preset-env","@babel/preset-react"],
                    "plugins":["@babel/plugin-transform-react-jsx"]
                }
            },
            {
                test:/\.jsx$/,
                loader:"babel-loader",
                query: {
                    "presets": ["@babel/preset-env","@babel/preset-react"],
                    "plugins":["@babel/plugin-transform-react-jsx"]
                }
            },
        ]
    }

}
