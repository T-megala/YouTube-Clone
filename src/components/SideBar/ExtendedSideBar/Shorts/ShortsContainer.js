import React from 'react';
import ShortsOption from './ShortsOption';
import ShortsVideo from './ShortsVideo';
import Data from './Data';

const ShortsContainer = (context) =>
	<div className="shortsVideos">
		{Data.map((cardDetail, i) =>
			<div key={ i } className="shortsVideoContainer">
				<ShortsVideo { ...{ ...context, data: { cardDetail }} }/>
				<ShortsOption { ...context }/>
			</div>)}
	</div>;

export default ShortsContainer;
