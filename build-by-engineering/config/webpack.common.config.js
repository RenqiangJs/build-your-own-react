const path = require('path')
const webpack = require("webpack")
module.exports = {
    entry:{
        app:'./src/app.js'
    },
    output:{
        filename:'js/bundles.js',
        path:__dirname+'/dist'
    },
    plugins:[
            new webpack.DefinePlugin({
              BASE_URL: '"./"'
            })
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