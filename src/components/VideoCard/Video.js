/* eslint-disable max-len */
import React from 'react';
import NavBar from '../NavBar/NavBar';
import VideoCard from './VideoCard';

const Video = (context) => {
	const { config: { cardDetails }} = context;

	return (
		<div>
			<NavBar { ...context }/>
			<div className="container">
				<video
					className="videoContainer"
					src="/video/Beach.mp4"
					controls={ true }
				/>
				<VideoCard { ...context }/>
			</div>
		</div>);
};

export default Video;
