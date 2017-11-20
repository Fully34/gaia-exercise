import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/dataActions';

import Header from './header/Header';
import Hero from './hero/Hero';
import Content from './content/Content';
import LazyLoader from './lazy-loader/LazyLoader';
import Spinner from './spinner/Spinner';

class App extends Component {
	
	constructor() {

		super();

		// binding event handlers in the constructor
		this.handlers = {
			getNextTiles: this.getNextTiles.bind(this),
			scrollToTop: this.scrollToTop.bind(this)
		};

		// using component state for simple display data
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
				tileIndexIncrement: 12 // when the load more button is clicked, increment currentTileIndex by this number to get more
			}
		}
	}

	componentWillMount() {
		this.props.getData();
	}

	scrollToTop(e) {
		e.preventDefault();
		return window.scrollTo(0,0);
	}
	
	getNextTiles(e) {
		e.preventDefault();
		const content = this.state.content;
		const totalVideoTiles = this.props.videoTiles.length;
		let newTileIndex = content.currentTileIndex + content.tileIndexIncrement;

		// don't want the new index to be greater than the lengh of the tile array!
		if (content.currentTileIndex > totalVideoTiles) {
			newTileIndex = totalVideoTiles;
		}

		// set current tile index to add more tiles to the UI
		return this.setState({
			...this.state,
			content: {
				...this.state.content,
				currentTileIndex: newTileIndex
			}
		});
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
				{ this.props.fetching && <Spinner /> }
				<Header {...this.state.nav} />
				<Hero {...this.props.hero} />
				<Content
					videoTiles={videosToShow}
					currentTileIndex={content.currentTileIndex}
					tileIndexIncrement={content.tileIndexIncrement} />
				<LazyLoader
					getNextTiles={this.handlers.getNextTiles}
					scrollToTop={this.handlers.scrollToTop}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const data = state.data;

	return {
		hero: data.hero,
		videoTiles: data.videoTiles,
		fetching: data.fetching
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