/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const MusicCarousel = () =>
	<div className="music_container">
		<Carousel
			autoPlay={ true }
			className="carousel"
		>
			<div>
				<video autoPlay={ true } className="video_carousel">
					<source
						src="https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761"
						type="video/mp4"
					/>
				</video>
				<div className="inner">
					<h1 style={ { color: 'white' } }> Team Dinner at Seashells</h1>
				</div>

			</div>
			<div>
				<video autoPlay={ true } className="video_carousel">
					<source
						src="https://player.vimeo.com/external/174002832.sd.mp4?s=0ca35de91c0ee05b84b55543c19cd0e47aa67a80&profile_id=164&oauth2_token_id=57447761"
						type="video/mp4"
					/>
				</video>
				<div className="inner">
					<h1 style={ { color: 'white' } }> Must for Guitar Starters</h1>
				</div>
			</div>
			<div>
				<video autoPlay={ true } className="video_carousel">
					<source
						src="https://player.vimeo.com/external/322424304.sd.mp4?s=8acd9f03f32aaca13e6014bcf7ac77135557630f&profile_id=164&oauth2_token_id=57447761"
						type="video/mp4"
					/>
				</video>
				<div className="inner">
					<h1 style={ { color: 'white' } }> Must for Guitar Starters</h1>
				</div>
			</div>
		</Carousel>
	</div>
	;

export default MusicCarousel;
