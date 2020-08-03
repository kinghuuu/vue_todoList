const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

const webpack = require('webpack')

const devConfig = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = merge(baseConfig, devConfig)