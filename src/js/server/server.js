require('babel-register');

const express = require('express');
const app = express();

// implement CORS
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

const initController = require('./controller');

initController(app, express);

const port = 8000;

app.listen(port, function () {
  console.log('Gaia started on port 8000');
});
