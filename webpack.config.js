var webpack = require('webpack');
var Et = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项
    entry: __dirname + "/src/scripts/app.js", // 唯一入口文件
    output: {
        path: __dirname + "/prd", //打包后文件存放的地方
        filename: "bundle.js" //打包后输出文件的文件名[name]-[hash].js
    },
    module: {
        loaders: [{
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.scss/,
                loader: Et.extract('style', 'css!sass')
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel', //在webpack的module部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss' //添加对样式表的处理
            },
            {
                test: /\.string$/,
                loader: 'string'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    //vue

    vue: {
        loaders: {
            js: 'babel'
        }
    },
    //plugins定义
    plugins: [
        new Et('bundle.css'), //这点也改成[name]-[hash]
        new webpack.optimize.UglifyJsPlugin()
    ],

    devServer: {
        contentBase: __dirname + "/prd", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
};


//：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。