/* eslint-disable max-len */
import { Avatar } from '@mui/material';
import React from 'react';

const ChannelIcon = ({ data: detail }) =>
	<div className="channelIcon">
		<Avatar
			alt="icon"
			src={ detail.icon }
		/>

	</div>;

export default ChannelIcon;
