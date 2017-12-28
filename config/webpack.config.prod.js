const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const dotenvConfig = require('dotenv').config();
const publicPath = '/';

const config = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		publicPath: publicPath,
		path: path.resolve(__dirname, '../build'),
		filename: 'prod/build.js'
	},
	module: {
		rules: [
			{test: /\.js$/, use: {loader: 'babel-loader', options: {presets: ['env', 'es2015', 'react']}}, exclude: /node_modules/},
			{
				test: /\.css$/, 
				use: ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				}),
				exclude: /^.(bootstrap).*\.css$/
			},
			{test: /\.json$/, use: {loader: 'json'}}
		]
	},
	plugins: [
		new UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/public/index.html')
		}),
		new ExtractTextWebpackPlugin('prod/styles.css')
	]
};

module.exports = config;

