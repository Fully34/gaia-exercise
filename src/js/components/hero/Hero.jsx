import React from 'react';

// get hero css
require('../../../styles/hero.scss');

const Hero = (props) => {
	return (
		<section className="hero-container m-b-4">
			<img
				className="img img-responsive large-banner"
				src={props.largeBannerUrl}
				alt="banner image"/>
			<img
				className="img img-responsive mobile-banner"
				src={props.mobileBannerUrl}
				alt="mobile banner image"/>
			<div className="hero-text-container">
				<h3 className="hero-title">{props.title}</h3>
				<p className="hero-text">{props.text}</p>
			</div>
		</section>
	);
}

export default Hero;