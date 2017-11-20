import React from 'react';

// get lazy loader css
require('../../../styles/lazy-loader.scss');

const LazyLoader = (props) => {
	return (
		<section className="lazy-loader-container clearfix text-center m-b-3 p-x-3">
			<button className="load-btn btn btn-primary" onClick={props.getNextTiles}> Load More </button>
			<div className="pull-right">
				<button className="btn btn-primary btn-sm" onClick={props.scrollToTop}>
					<span className="glyphicon glyphicon-chevron-up"></span>
				</button>
			</div>
		</section>
	)
}

export default LazyLoader;