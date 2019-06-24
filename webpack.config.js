const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry:'./src/js/main.js',
    mode:'development',
    devtool:'cheap-module-soure-map',
    output:{
        path:path.resolve(__dirname,'dist'),
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
    devServer:{
        open:true,
        contentBase:'./dist',
        hot:true,
        hotOnly:true
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}