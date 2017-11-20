import React from 'react';

const VideoTile = (props) => {
	return (
		<li className="video-tile col-md-3 col-sm-6 col-xs-12 m-b-2">
			<img
				className="img img-responsive video-tile-image m-b-2"
				src={props.imageUrl}
				alt={`${props.seriesTitle} image`}/>
			<section className="video-tile-meta">
				<div>
					<span className="series-title">{props.seriesTitle}</span>
					<div className="pull-right">
						<span className="video-likes p-r-1">{props.likeCount}</span>
						<span className="glyphicon glyphicon-thumbs-up"></span>
					</div>
				</div>
				<h4 className="video-title m-b-1 m-t-1">{props.videoTitle}</h4>
				<p className="season-episode m-b-0">
					{props.seasonEpisodeText}
				</p>
				<p className="duration m-b-0">
					{props.durationText}
				</p>
			</section>
		</li>
	)
}

export default VideoTile;