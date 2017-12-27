# Output Management

	npm install --save-dev html-webpack-plugin
	npm install clean-webpack-plugin --save-dev

## Prevent Duplication

####	webpack.config.js
 		
 		const webpack = require('webpack');

 		module.exports = {
	     plugins: [
	      new webpack.optimize.CommonsChunkPlugin({
	        name: 'common' // Specify the common bundle's name.
	      })
	     ]
	 	}


## Dynamic Imports

    entry: {
     index: './src/index.js'
    },
    plugins: [
      	new HTMLWebpackPlugin({title: 'Code Splitting'})
      ]
	output: {
	     chunkFilename: '[name].bundle.js',
    }



Referencias 

https://webpack.js.org/guides/code-splitting/


