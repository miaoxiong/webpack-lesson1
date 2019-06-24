const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config= {
    // entry:'./src/js/main.js',
    mode:'development',
    devtool:'cheap-module-eval-soure-map',
    devServer:{
        open:true,
        contentBase:'./dist',
        hot:true,
        hotOnly:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
                manifest: require('../dist/vendor-manifest.json'),
            })
    ]
}

module.exports = merge(baseConfig,config)