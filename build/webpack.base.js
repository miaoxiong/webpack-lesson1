const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:{
        main:'./src/react/index.js',
    },
    output:{
        path:path.resolve('./dist'),
        filename:'js/[name].[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            
                { 
                    test: /\.js$/, 
                    exclude: /node_modules/, 
                    loader: "babel-loader" 
            }
                ]
            
        },
    plugins:[
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html',
        })
        
    ],
    optimization:{
            usedExports:true
        }
}