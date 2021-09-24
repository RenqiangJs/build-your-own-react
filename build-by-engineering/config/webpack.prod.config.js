const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')
module.exports = merge(common,{
    mode:'production',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            // template: 'public/index.html',
            inject: 'body',
            minify : {
                removeComments: true,
                collapseWhitespace: true,
                caseSensitive: false
            }
        }),
        // new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ]
})