import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const BrowseChannels = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>BrowseChannels</div>
		</div>
	</div>;

export default BrowseChannels;
