import { React } from 'react';
import ChannelIcon from './ChannelIcon';
import Description from './Description';

const Channel = (context) =>
	<div className="channel">
		<ChannelIcon { ...context }/>
		<Description { ...context }/>
	</div>;

export default Channel;
