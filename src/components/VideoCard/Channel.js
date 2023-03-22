import { React } from 'react';
import ChannelIcon from './ChannelIcon';
import Description from './Description';
import Options from './Options';

const Channel = (context) =>
	<div className="channel">
		<ChannelIcon { ...context }/>
		<Description { ...context }/>
		<Options { ...context }/>
	</div>;

export default Channel;
