var requestPromise = require('request-promise');

/**
 * validate Gaia 'title' object and create/return 'videoTile' domain object
 */
function createVideoTile(title) {
	const hero_image = title.hero_image;
	const fivestar = title.fivestar;
	const season = title.fields.season;
	const episode = title.fields.episode;
	const preview = title.preview;
	const series = title.series;

	const seasonText = season && season[0].value || '';
	const episodeText = episode && episode[0].value || '';
	const seasonEpisodeText = seasonText && episodeText // really basic validation
		? `Season ${seasonText} Episode ${episodeText}`
		: '';

	const durationText = preview && preview.duration
		? `${preview.duration} min`
		: '';

	return {
		imageUrl: hero_image && hero_image.hero_570x300 || 'http://via.placeholder.com/570x300',
		videoTitle: title.title || '',
		seriesTitle: series && series.title || '',
		likeCount: fivestar && fivestar.up_count.value || null,
		seasonEpisodeText: seasonEpisodeText,
		durationText: durationText
	}
}

/**
 * validate the 'term' object from Gaia and create/return a 'hero' domain object
 */
function createHero(term) {
	const termImages = term && term.termImages || null;
	const hero = termImages && termImages.hero || null;
	const largeBannerUrl = hero && hero.hero_1125x414 || 'http://via.placeholder.com/1125x414';
	const tile = termImages && termImages.tile || null;
	const mobileBannerUrl = tile && tile.tile_532x400 || 'http://via.placeholder.com/1125x414';

	return {
		title: term.name.toUpperCase() || '',
		text: term.body || '',
		largeBannerUrl: largeBannerUrl,
		mobileBannerUrl: mobileBannerUrl
	}
}

/**
 * take response and return data in a useable form
 */
function mapData(response) {
	const term = response.term;
	const videoTiles = response.titles.map((el, index) => {
		return createVideoTile(el);
	});
	const hero = createHero(term);

	return {
		hero: hero,
		videoTiles: videoTiles
	};
}

/**
 * use request-promise to make data request
 * map the returned data to useable domain objects
 */
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