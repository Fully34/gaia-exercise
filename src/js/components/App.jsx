import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/dataActions';

import Header from './header/Header';
import Hero from './hero/Hero';

class App extends Component {
	
	constructor() {

		super();

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
				searchPlaceholder: 'Search...'
			}
		}
	}

	componentWillMount() {
		this.props.getData();
	}

	render() {
		return (
			<div className='page'>
				<Header {...this.state.nav} />
				<Hero {...this.props.hero} />
				{/* <Content ...this.props.videoTiles /> */}
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