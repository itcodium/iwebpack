# instalacion global 

## Instalacion 
	
	npm install --save-dev webpack@2.1.0-beta.25
	npm install --global webpack
	
	npm install --save lodash
	npx webpack src/index.js dist/bundle.js
	npx webpack --config webpack.config.js
	
## NPM Scripts package.json
	
	"scripts": {
		"build": "webpack"
	},
		
		npm run build

## Asset Management

	npm install --save-dev style-loader css-loader

### Loading Images
	npm install --save-dev file-loader

### Loading Data
	npm install --save-dev csv-loader xml-loader

## Output Management

### Setting up HtmlWebpackPlugin
	npm install --save-dev html-webpack-plugin

### Cleaning up the /dist folder 
	npm install clean-webpack-plugin --save-dev


## Development

	webpack.config.js
		devtool: 'inline-source-map',

	package.json: 
		"watch": "webpack --watch"

		npm run watch

## Using webpack-dev-server

	npm install --save-dev webpack-dev-server

	para webpack 2.1.0-beta.25	utilizar:
	  	
	package.json
		"webpack-dev-server": "2.1.0-beta.10",

	run:
		1. delete package-lock.json	
		2. npm uninstall
		3. npm install

### Using webpack-dev-middleware
	npm install --save-dev express webpack-dev-middleware


## Hot Module Replacement

	It allows all kinds of modules to be updated at runtime without the need for a full refresh
	package.json

	"start": "webpack-dev-server --hotOnly",
	npm start

### HMR with Stylesheets		

	npm install --save-dev style-loader css-loader

## Tree Shaking

	Is a term commonly used in the JavaScript context for dead-code elimination 
	
### Minify the Output
	  
	npm i --save-dev uglifyjs-webpack-plugin

## Production

	npm install --save-dev webpack-merge

## Code Splitting

	Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel

## Lazy Loading

	Lazy, or "on demand", loading is a great way to optimize your site or application. This practice essentially involves splitting your code at logical breakpoints, and then loading it once the user has done something that requires, or will require, a new block of code.

## Caching

	focuses on the configuration needed to ensure files produced by webpack compilation can remain cached unless their contents has changed.


### Output Filenames
	A simple way to ensure the browser picks up changed files is by using output.filename substitutions. The [hash] substitution can be used to include a build-specific hash in the filename, however it's even better to use the [chunkhash] substitution which includes a chunk-specific hash in the filename.



##Authoring Libraries


## IMPORTANTE, deshabilitar antivirus al instalar modulos de lo contrario se puede producir el siguiente error u otro similar:

	npm ERR!   stack: 'Error: EPERM: operation not permitted, lstat 
	\'webpack-demo\node_modules\fsevents\node_modules\'',
	npm ERR!   errno: -4048,
	npm ERR!   code: 'EPERM',
	npm ERR!   syscall: 'lstat',
	npm ERR!   path: 'webpack-demo\node_modules\fsevents\node_modules' }

	npm ERR! Please try running this command again as root/Administrator.

	C:\\Users\\MYEQ\\Desktop\\github\\iwebpack\\webpack-demo


###  A veces tambien es necesario 

	0. borrar package-lock.json y carpeta node_modules
	1. Modificar el package.json
	2. npm update o npm install

