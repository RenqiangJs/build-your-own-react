const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = merge(common,{
    mode:'production',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index123.html',
            template: 'public/index.html',
            inject: 'body',
            minify : {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ]
})