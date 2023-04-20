/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Banner = (context) => {
	const { data } = context;

	return <div className="musicContainer">
		<Carousel
			autoPlay={ true }
			infiniteLoop={ true }
			showIndicators={ false }
			showStatus={ false }
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
						<h1 style={ { color: 'white' } }>{ele.text}</h1>
						<div><h2 style={ { color: 'white' } }>{ele.channel}</h2><span>{ele.views}</span></div>
					</div>
				</div>)}
		</Carousel>
	</div>;
};

export default Banner;
