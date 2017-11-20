import React from 'react';
import VideoTile from './VideoTile';

require('../../../styles/content.scss');

const Content = (props) => {

	return (
		<section className="content-container">
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