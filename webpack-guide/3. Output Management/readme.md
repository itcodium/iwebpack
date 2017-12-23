# Output Management


# HtmlWebpackPlugin by default will generate its own index.html

	npm install --save-dev html-webpack-plugin
	npm install clean-webpack-plugin --save-dev

# Configuracion

	webpack.config.js

	module.exports 
	  entry: {
	     app: 	'./src/index.js',
	     print: './src/print.js'
	  },
	  output: {
	    filename: '[name].bundle.js',
	  }

	- entry.nombre 	  -> hace referencia a un archivo por ejemplo './src/print.js'
	- output.filename -> esta tomando el primer item de entry


## Referencias en archivo \dist\index.html

	<script src="./app.bundle.js"></script>
	<script src="./website.bundle.js"></script>
	<script src="./print.bundle.js"></script>


## Setting up HtmlWebpackPlugin

	+   plugins: [
	+     new HtmlWebpackPlugin({
	+       title: 'Output Management'
	+     })
	+   ],

	title: este valor se reemplaza en el title del archivo dist\index.html

## Cleaning up the /dist folder


Referencias 

	https://webpack.js.org/guides/output-management/

