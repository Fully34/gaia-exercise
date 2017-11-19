var requestPromise = require('request-promise');

// validate title object
function validateTitle(title) {
	const hero_image = title.hero_image;
	const fivestar = title.fivestar;
	const season = title.fields.season;
	const episode = title.fields.episode;
	const preview = title.preview;

	return {
		imageUrl: hero_image && hero_image.hero_320x200 || '',
		seriesTitle: title.title || 'no title available',
		likeCount: fivestar && fivestar.up_count.value || null,
		season: season && season[0].value || null,
		episode: episode && episode[0].value || null,
		duration: preview && preview.duration || null
	}
}

// function to map return from gaia
function mapData(response) {

	const term = response.term;
	const videoTiles = response.titles.map((el, index) => {
		return validateTitle(el);
	});

	return {
		hero: {
			title: term.name,
			text: term.body,
			largeBannerUrl: term.termImages.hero.hero_1070x300,
			mediumBannerUrl: term.termImages.hero.hero_700x300,
			smallBannerUrl: term.termImages.hero.hero_320x200,
			tileUrl: term.termImages.tile.tile_532x400
		},
		videoTiles: videoTiles
	};
}

// use request-promise to make the request as a promise
// then map the result
module.exports = {
	getData: () => {
		return requestPromise({
			uri: 'https://d6api.gaia.com/videos/term/119931',
			headers: {'Content-Type': 'application/json'},
			json: true
		})
		.then(response => {
			return mapData(response);
		})
		.catch(err => {
			return err;
		})
	}
};