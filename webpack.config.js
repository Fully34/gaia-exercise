// node path module
const path = require('path');


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
	// use src folder as starting point for dev server
	devServer: {
		contentBase: paths.SRC
	}
};
