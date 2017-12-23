# Development

	npm install --save-dev webpack-dev-server


## Using Watch Mode

	run npm run watch from the command line to see that webpack compiles your code, but doesn't exit to the command line. This is because the script is still watching your files.

	webpack.config.js

		module.exports = {
			devtool: 'inline-source-map',
		}
   		
	package.json

	   "scripts": {
			"watch": "webpack --watch",
		}


##Using webpack-dev-server

	webpack.config.js

 	module.exports = {
		devServer: {
	    	contentBase: './dist'
	    }
    }

	package.json
	
	   "scripts": {
			"start": "webpack-dev-server --open",
		}

	
	start a server: http://localhost:8080/

## Using webpack-dev-middleware 

	webpack.config.js

		module.exports = {
			output: {
				...
      			publicPath: '/'
    		}
		}

	Agregar archivo:

	 	server.js
   		

	package.json

	   "scripts": {
			"server": "node server.js",
		}



## Adjusting Your Text Editor

When using automatic compilation of your code, you could run into issues when saving your files. Some editors have a "safe write" feature that can potentially interfere with recompilation.

To disable this feature in some common editors, see the list below:

    Sublime Text 3 - Add atomic_save: "false" to your user preferences.
    WebStorm - uncheck Use "safe write" in Preferences > Appearance & Behavior > System Settings.





Referencias 

	https://webpack.js.org/guides/development/

