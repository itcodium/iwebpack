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