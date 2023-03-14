/* eslint-disable max-len */
import { Avatar } from '@mui/material';
import React from 'react';

const ChannelIcon = ({ data: detail }) =>
	<Avatar
		alt="icon"
		src={ detail.icon }
	/>;

export default ChannelIcon;
