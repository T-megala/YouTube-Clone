/* eslint-disable max-len */
import React from 'react';
import ShortsOption from './ShortsOption';

const ShortsVideo = (context) => {
	const { config: { cardDetails }} = context;

	return	<div className="shortsContainer">
		{cardDetails.map(({ video }, i) =>
			<div key={ i } className="shortsVideo">
				<video
					muted={ true }
					autoPlay={ true }
					controls=""
					className="shorts"
				>
					<source src={ video }/>
				</video>
				<ShortsOption { ...context }/>
			</div>)}
	</div>;
};

export default ShortsVideo;
