import React from 'react';
import VideoDescription from './VideoDescription';

const Video = (context) => {
	const { state: { selectedId, selectedVideo }} = context;

	return (
		<div className="videoContainer">
			<div>
				<video
					className="video"
					src={ selectedId }
					autoPlay={ true }
					controls={ true }
				/>
				<div
					className="videoName"
					style={ { margin: '1% 0 0 3%',
						fontWeight: '600' } }
				>{selectedVideo}</div>
				<VideoDescription { ...context }/>
			</div>
		</div>);
};

export default Video;
