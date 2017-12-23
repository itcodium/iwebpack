# Install webpack

	npm install -g npx@latest
	npm install -g bootstrap
	npm install --global webpack

# Basic Setup

	mkdir webpack-demo && cd webpack-demo
	npm init -y
	npm install --save-dev webpack

# Creating a Bundle

	npm install --save lodash

	 webpack-demo
	  |- package.json
	+ |- /dist
	+   |- index.html
	- |- index.html
	  |- /src
	    |- index.js


# Modules

	webpack-demo
	+ |- webpack.config.js

# NPM Scripts

	package.json

	{
	  ...
	  "scripts": {
	    "build": "webpack"
	  },
	  ...
	}

	npm run build



Referencias 

https://webpack.js.org/guides/installation/
