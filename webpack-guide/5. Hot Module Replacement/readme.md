# Hot Module Replacement

## Using Watch Mode

	webpack.config.js
		module.exports = {
			plugins: [
		     	new webpack.NamedModulesPlugin(),
		     	new webpack.HotModuleReplacementPlugin()
		    ],
		    devServer: {
		      hot: true
		    }
		}
   		

## Via the Node.js API

When using Webpack Dev Server with the Node.js API, don't put the dev server options on the webpack config object. Instead, pass them as a second parameter upon creation. For example:

	dev-server.js


	const options = {
	  contentBase: './dist',
	  hot: true,
	  host: 'localhost'
	};


	webpackDevServer.addDevServerEntrypoints(config, options);
	const compiler = webpack(config);
	const server = new webpackDevServer(compiler, options);


Referencias 

https://webpack.js.org/guides/hot-module-replacement/


