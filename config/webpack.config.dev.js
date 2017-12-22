const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';

const config = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		publicPath: publicPath,
		path: path.resolve(__dirname, '../build'),
		filename: 'dev/build.js'
	},
	module: {
		rules: [
			{test: /\.js$/, use: {loader: 'babel-loader', options: {presets: ['env', 'es2015', 'react']}}, exclude: /(node_modules)/},
			{test: /\.css$/, use: {loader: 'css-loader'}, exclude: /^.*(bootstrap).*\.css$/},
			{test: /\.json$/, use: {loader: 'json'}}
		]
	},
	plugins: [
		new UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/public/index.html')
		})
	]
};

module.exports = config;

