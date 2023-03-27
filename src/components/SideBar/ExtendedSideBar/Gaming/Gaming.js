import React from 'react';
import SideBar from '../../SideBar';
import GamingVideos from './GamingVideos';

const Gaming = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<GamingVideos { ...context }/>
	</div>;

export default Gaming;
