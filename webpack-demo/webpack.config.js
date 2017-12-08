const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

  module.exports = {
    entry: {
      app: './src/index.js',
      another: './src/another-module.js'
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
       title: 'Code Splitting'
     }),
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'common'
     }),
     new UglifyJSPlugin()

   ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    }
  };
 
