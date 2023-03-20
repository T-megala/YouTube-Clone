/* eslint-disable id-length */
/* eslint-disable max-len */
import React from 'react';

import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const historyButtons = [
	{
		text: 'clear all watch history',
		icon: <DeleteForeverOutlinedIcon/>,
	},
	{
		text: 'pause watch history',
		icon: <PauseCircleOutlinedIcon/>,
	},
	{
		text: 'manage all history',
		icon: <SettingsOutlinedIcon/>,
	},
];

export default historyButtons;
