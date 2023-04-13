import { peek } from '@laufire/utils/debug';
import React from 'react';
import ShortsDescription from './ShortsDescription';

const ShortsVideo = (context) => {
	const { data: { cardDetail }} = context;

	return <div className="shorts">
		<ShortsDescription { ...{ ...context, data: { cardDetail }} }/>
		<video
			muted={ true }
			autoPlay={ true }
			loop={ true }
			controls=""
			onMouseOver={ (e) => peek(e) }
		>
			<source src={ cardDetail.video }/>
		</video>
	</div>;
};

export default ShortsVideo;
