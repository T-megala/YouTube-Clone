import React from 'react';
import ShortsOption from './ShortsOption';
import ShortsVideo from './ShortsVideo';

const ShortsContainer = (context) => {
	const { config: { cardDetails }} = context;

	return	<div className="shortsVideos">
		{cardDetails.map((cardDetail, i) =>
			<div key={ i } className="shortsVideoContainer">
				<ShortsVideo { ...{ ...context, data: { cardDetail }} }/>
				<ShortsOption { ...context }/>
			</div>)}
	</div>;
};

export default ShortsContainer;
