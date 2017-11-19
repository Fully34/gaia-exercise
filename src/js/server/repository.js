var requestPromise = require('request-promise');

// function to map return from gaia
function mapData(data) {
	return {
		hero: {},
		videoTiles: []
	};
}

	// use request-promise to make the request as a promise
	// then map the result

module.exports = {
	getData: () => {
		return requestPromise({
			uri: 'https://d6api.gaia.com/videos/term/119931',
			headers: {'Content-Type': 'application/json'}
		})
		.then(response => {
			return mapData();
		})
		.catch(err => {
			return err;
		})
	}
};