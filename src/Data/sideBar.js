import React from 'react';
import { HomeOutlined, SubscriptionsOutlined,
	PlayArrowOutlined, VideoLibraryOutlined,
	RestoreOutlined, MusicNoteOutlined,
	SportsEsportsOutlined, FitnessCenterOutlined, LightbulbOutlined,
	CheckroomOutlined, AddCircleOutlineOutlined,
	SettingsOutlined, FlagOutlined,
	HelpOutlineOutlined } from '@mui/icons-material';

const sideBar = [
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
	{
		text: 'Music',
		icon: <MusicNoteOutlined/>,
	},
	{
		text: 'Gaming',
		icon: <SportsEsportsOutlined/>,
	},
	{
		text: 'Sport',
		icon: <FitnessCenterOutlined/>,
	},
	{
		text: 'Learning',
		icon: <LightbulbOutlined/>,
	},
	{
		text: 'Fashion & beauty',
		icon: <CheckroomOutlined/>,
	},
	{
		text: 'Browse channels',
		icon: <AddCircleOutlineOutlined/>,
	},
	{
		text: 'Settings',
		icon: <SettingsOutlined/>,
	},
	{
		text: 'Report history',
		icon: <FlagOutlined/>,
	},
	{
		text: 'Help',
		icon: <HelpOutlineOutlined/>,
	},
];

export default sideBar;
