/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import NavBar from '../NavBar/NavBar';
import VideoCard from './VideoCard';

const Video = (context) => {
	const { config: { cardDetails }, path } = context;

	return (
		<div>
			<NavBar { ...context }/>
			<div className="container">
				{cardDetails.some((data, key) =>
					(data.id === path.slice(6)
						? <div key={ key }>
							<video
								className="videoContainer"
								src={ data.video }
								controls={ true }
							/>
							<VideoCard { ...context }/>
						</div>
						: ''))}
			</div>
		</div>);
};

export default Video;
