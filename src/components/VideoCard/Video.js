import React from 'react';
import FilterContent from '../FilterContent/FilterContent';
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
				<FilterContent { ...context }/>
			</div>
		</div>);
};

export default Video;
