
const config = {
	entry: 'index.js',
	output: {
		path: path.resolve(__dirname, '/build/dev'),
		filename: 'build.js'
	},
	module: {
		rules: [
			{test: /\.js$/, use: 'babel-loader'},
			{test: /\.css$/, use: 'css-loader'}
		]
	}
};

module.exports = config;

