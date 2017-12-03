# instalacion global 

	##basic build 
	
	npm install --global webpack
	npm install --save lodash
	npx webpack src/index.js dist/bundle.js
	npx webpack --config webpack.config.js
	
	## NPM Scripts package.json
	
	  "scripts": {
		"build": "webpack"
		},
		
		npm run build

	##Asset Management
	npm install --save-dev style-loader css-loader

	##Loading Images
	npm install --save-dev file-loader

	##Loading Data
	npm install --save-dev csv-loader xml-loader

	##Setting up HtmlWebpackPlugin
	npm install --save-dev html-webpack-plugin

	##Cleaning up the /dist folder 
	npm install clean-webpack-plugin --save-dev




## IMPORTANTE, deshabilitar antivirus al instalar modulos de lo sontrario se puede producir el siguiente error o similar:

	npm ERR!   stack: 'Error: EPERM: operation not permitted, lstat 
	\'webpack-demo\node_modules\fsevents\node_modules\'',
	npm ERR!   errno: -4048,
	npm ERR!   code: 'EPERM',
	npm ERR!   syscall: 'lstat',
	npm ERR!   path: 'webpack-demo\node_modules\fsevents\node_modules' }

	npm ERR! Please try running this command again as root/Administrator.