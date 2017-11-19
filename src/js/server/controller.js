const repository = require('./repository');

module.exports = (app, express) => {

	app.get('/landing', function (req, res) {

		return repository.getData()
			.then(data => {
				res.send(data);
			})
			.catch(err => {
				res.send(err);
			})
	});
};	