import React from 'react';
import SideBar from '../SideBar';
import ChannelCategories from './BrowseChannels/ChannelCategories';

const BrowseChannels = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<ChannelCategories { ...context }/>
	</div>;

export default BrowseChannels;
