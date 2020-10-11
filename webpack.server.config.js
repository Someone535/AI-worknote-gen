const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = (env, argv) => {
	return ({
    watch: false,
    watchOptions: {
      ignored: /node_modules/
    },
    mode: 'development',
		entry: {
			server: './src/server/server.js'
		},
		output: {
			path: path.join(__dirname, 'dist'),
			publicPath: '/',
			filename: '[name].js'
		},
		target: 'node',
		node: {
			__dirname: false,
			__filename: false
		},
		externals: [nodeExternals()],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				}
			]
		}
	})
}
