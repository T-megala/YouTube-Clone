import React from 'react';
import { HomeOutlined, SubscriptionsOutlined,
	PlayArrowOutlined, VideoLibraryOutlined,
	RestoreOutlined } from '@mui/icons-material';

const shrinkSideBar = [
	{
		text: 'Home',
		icon: <HomeOutlined/>,
	},
	{
		text: 'Shorts',
		icon: <PlayArrowOutlined/>,
	},
	{
		text: 'Subscriptions',
		icon: <SubscriptionsOutlined/>,
	},
	{
		text: 'Library',
		icon: <VideoLibraryOutlined/>,
	},
	{
		text: 'History',
		icon: <RestoreOutlined/>,
	},

];

export default shrinkSideBar;
