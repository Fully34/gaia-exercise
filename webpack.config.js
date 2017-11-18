// node path module
const path = require('path');
// let htmlWebpackPlugin handle creating html files for webpack bundle
const htmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'), // adding for dev server
	JS: path.resolve(__dirname,'src/js')
};

// config
module.exports = {
	entry: path.join(paths.JS, 'app.js'),
	output: {
		path: paths.DIST,
		filename: 'app.bundle.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.join(paths.SRC, 'index.html')
		})
	]

	// use src folder as starting point for dev server
	// NOT NEEDED DUE TO HTML WEBPACK PLUGIN
	// devServer: {
	// 	contentBase: paths.SRC
	// }
};
