const path = require('path')
const webpack = require("webpack")
module.exports = {
    entry:{
        app:'./src/app.js'
    },
    output:{
        filename:'js/bundles.js',
        path:path.resolve(__dirname,'../dist')
    },
    devServer: {
        static: "./",
        host:"localhost",
        port:8080,
        open:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}