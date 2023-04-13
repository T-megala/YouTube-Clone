/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Banner = (context) => {
	const { data } = context;

	return <div className="music_container">
		<Carousel
			autoPlay={ true }
			className="carousel"
		>
			{data.map((ele, i) =>
				<div key={ i }>
					<video autoPlay={ true } className="video_carousel">
						<source
							src={ ele.video }
							type="video/mp4"
						/>
					</video>
					<div className="inner">
						<h1 style={ { color: 'white' } }> Team Dinner at Seashells</h1>
					</div>
				</div>)}
		</Carousel>
	</div>;
};

export default Banner;
