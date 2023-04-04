/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const MusicCarousel = () =>
	<div className="music_container">
		<Carousel
			autoPlay={ true }
			showThumbs={ false }
			className="carousel"
		>

			<div>
				<img
					alt=""
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
				/>

			</div>
			<div>
				<img
					alt=""
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
				/>
			</div>
			<div>
				<img
					alt=""
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
				/>

			</div>
		</Carousel>
	</div>
	;

export default MusicCarousel;
