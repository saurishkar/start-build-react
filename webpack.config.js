
const config = {
	entry: 'index.js',
	output: {
		path: path.resolve(__dirname, `/build/${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}`),
		filename: `build_${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}.js`
	},
	module: {
		rules: [
			{test: /.js$/, use: 'babel-loader'},
			{test: /.css$/, use: 'css-loader'}
		]
	}
};

module.exports = config;

