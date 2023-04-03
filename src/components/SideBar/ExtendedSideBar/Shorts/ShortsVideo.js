import React from 'react';
import ShortsDescription from './ShortsDescription';

const ShortsVideo = (context) => {
	const { data: { cardDetail }} = context;

	return <div className="shorts">
		<ShortsDescription { ...{ ...context, data: { cardDetail }} }/>
		<video
			muted={ true }
			autoPlay={ true }
			controls=""
		>
			<source src={ cardDetail.video }/>
		</video>
	</div>;
};

export default ShortsVideo;
