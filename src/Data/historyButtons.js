/* eslint-disable id-length */
/* eslint-disable max-len */
import React from 'react';

import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const historyButtons = [
	{
		text: 'Clear all watch history',
		icon: <DeleteForeverOutlinedIcon/>,
	},
	{
		text: 'Pause watch history',
		icon: <PauseCircleOutlinedIcon/>,
	},
	{
		text: 'Manage all history',
		icon: <SettingsOutlinedIcon/>,
	},
];

export default historyButtons;
