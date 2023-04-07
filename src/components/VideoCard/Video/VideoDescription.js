import React from 'react';
import Left from './Left';
import Right from './Right';

const VideoDescription = (context) =>
	<div
		className="channel"
		style={ { width: '87%',
			margin: '2% 0 10% 3%' } }
	>
		<Left { ...context }/>
		<Right/>
	</div>;

export default VideoDescription;
