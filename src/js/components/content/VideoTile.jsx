import React from 'react';

const VideoTile = (props) => {
	return (
		<li className="video-tile col-md-3 col-sm-6">
			<img
				className="img img-responsive video-tile-image"
				src={props.imageUrl}
				alt={`${props.seriesTitle} image`}/>
			<section className="video-tile-meta">
				<div className="meta-header">
					<span className="series-title">{props.seriesTitle}</span>
					<span className="video-likes">{props.likeCount}</span>
				</div>
			</section>
			<h3 className="video-title">{props.videoTitle}</h3>
			<p className="season-episode">
				{`${props.season}${props.episode}`}
			</p>
			<p className="duration">
				{props.duration}
			</p>
		</li>
	)
}

export default VideoTile;