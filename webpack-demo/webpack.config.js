const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


  module.exports = {
     entry: {
     main: './src/index.js',
     vendor: [
       'lodash'
     ]
   },
   devtool: 'inline-source-map',
     devServer: {
     contentBase: './dist',
      hot: true
   },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }
     ]
   },
   plugins: [

     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
           title: 'Caching'
     }),
     new webpack.NamedModulesPlugin(),
     new webpack.HashedModuleIdsPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor'
     })

   ],
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    }
  };
 

 