import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/dataActions';

import Header from './header/Header';
import Hero from './hero/Hero';
import Content from './content/Content';

class App extends Component {
	
	constructor() {

		super();

		this.handlers = {
			getNextTiles: this.getNextTiles.bind(this)
		};

		this.state = {
			nav: {
				navLinks: [
					'MY GAIA',
					'YOGA',
					'TRANSFORMATION',
					'SEEKING TRUTH',
					'FILMS & DOCS',
					'CENTERS'
				],
				searchPlaceholder: 'Search...',
			},
			content: {
				currentTileIndex: 12, // default to displaying the first 12 tiles
				tileIndexIncrement: 12 // when the load more button is clicked, increament currentTileIndex by this number to get more
			}
		}
	}

	componentWillMount() {
		this.props.getData();
	}

	getNextTiles() {
		
	}

	render() {
		const content = this.state.content;
		// ideally 'paginating' the video tiles should be done on the API
		const videosToShow = this.props.videoTiles.slice(
			0,
			content.currentTileIndex
		);

		return (
			<div className='page'>
				<Header {...this.state.nav} />
				<Hero {...this.props.hero} />
				<Content
					videoTiles={videosToShow}
					currentTileIndex={content.currentTileIndex}
					tileIndexIncrement={content.tileIndexIncrement} />
				{/* <LazyLoader /> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		hero: state.data.hero,
		videoTiles: state.data.videoTiles
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => {
			return dispatch(getData())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);