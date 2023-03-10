import React from 'react';
import SideBar from './SideBar/SideBar';
import VideoCard from './VideoCard/VideoCard';

const Container = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<VideoCard { ...context }/>
	</div>;

export default Container;
