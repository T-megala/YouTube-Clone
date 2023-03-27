import React from 'react';
import NavBar from '../NavBar/NavBar';

const Video = (context) => {
	const { state: { selectedId }} = context;

	return (
		<div>
			<NavBar { ...context }/>
			<div className="videoContainer">
				<video
					className="video"
					src={ selectedId }
					controls={ true }
				/>
			</div>
		</div>);
};

export default Video;
