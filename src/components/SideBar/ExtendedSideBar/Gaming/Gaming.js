import React from 'react';
import NavBar from '../../../NavBar/NavBar';
import SideBar from '../../SideBar';
import GamingVideos from './GamingVideos';

const Gaming = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<GamingVideos { ...context }/>
		</div>
	</div>;

export default Gaming;
