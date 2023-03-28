import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';
import ChannelCategories from './BrowseChannels/ChannelCategories';

const BrowseChannels = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<ChannelCategories { ...context }/>
		</div>
	</div>;

export default BrowseChannels;
