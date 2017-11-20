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
	entry: ['babel-polyfill',  './src/js/main.js'],
	output: {
		path: paths.DIST,
		filename: 'app.bundle.js'
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.join(paths.SRC, 'index.html')
		})
	],

	//loaders
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?[a-z0-9]+)?$/,
				loader: ['file-loader?name=fonts/[name].[ext]'],
				exclude: /node_modules/
			}
		]
	},

	// resolve import statements
	resolve: {
		extensions: ['.js', '.jsx']
	},

	// for debugging in browser
	devtool : 'cheap-source-map'
};
