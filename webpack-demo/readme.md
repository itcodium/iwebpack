# instalacion global 

	##basic build 
	
	npm install --global webpack
	npx webpack src/index.js dist/bundle.js
	npx webpack --config webpack.config.js
	
	## NPM Scripts package.json
	
	  "scripts": {
		"build": "webpack"
		},
		
		npm run build