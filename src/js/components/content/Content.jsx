import React from 'react';
import VideoTile from './VideoTile';

// get content css
require('../../../styles/content.scss');

const Content = (props) => {
	return (
		<section className="content-container">
			<div className="content-filter-row col-xs-12 m-b-2">
				<div className="recommendation-text-container">
					<span className="recommendation-text">
						We suggest you start here
					</span>
					<span className="glyphicon glyphicon-arrow-down"></span>
				</div>
				<input type="select"/>
			</div>
			<ul className="video-tile-list">
			{
				props.videoTiles.map((el, i) => {
					return <VideoTile {...el} key={i} />
				})
			}
			</ul>
		</section>
	)
}

export default Content;