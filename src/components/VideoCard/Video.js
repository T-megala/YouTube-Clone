import React from 'react';
import NavBar from '../NavBar/NavBar';

const Video = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<video
				className="videoContainer"
				src="/video/testVc.mp4"
				controls={ true }
			/>
		</div>
	</div>;

export default Video;
