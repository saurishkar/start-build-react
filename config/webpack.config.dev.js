const path = require('path');
const config = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, '../build/dev'),
		filename: 'build.js'
	},
	module: {
		rules: [
			{test: /\.js$/, use: {loader: 'babel-loader', options: {presets: ['env', 'es2015', 'react']}}, exclude: /(node_modules)/},
			{test: /\.css$/, use: {loader: 'style-loader!css-loader'}, exclude: /^.*(bootstrap).*\.css$/},
			{test: /\.json$/, use: {loader: 'json'}}
		]
	}
};

module.exports = config;

