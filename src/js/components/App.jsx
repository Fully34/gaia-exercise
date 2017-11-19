import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/dataActions';


class App extends Component {

	componentWillMount() {
		this.props.getData();
	}

	render() {
		return (
			<div className='test'>
				HI I'm REACT
			</div>
		)
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