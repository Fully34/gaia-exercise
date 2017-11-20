const repository = require('./repository');

module.exports = (app, express) => {
	/**
	 * the API's only responsibility is to get data from Gaia and return
	 * domain objects to the UI
	 */
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