# Production

## Modulos a instalar 

	Tener en cuenta el orden de instalacion de lo contrario se pueden producir errores al instalar los modulos

	npm install --save-dev webpack
	npm install --save lodash
	npm install --save-dev webpack-dev-server
	npm install --save-dev express webpack-dev-middleware
	npm install --save-dev webpack-merge
	npm install --save-dev clean-webpack-plugin 


	
## Specify the Environment

### webpack.prod.js
	new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
    })


Referencias 

https://webpack.js.org/guides/production/
