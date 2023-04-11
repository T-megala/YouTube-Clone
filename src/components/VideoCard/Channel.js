import { React } from 'react';
import ChannelIcon from './ChannelIcon';
import Description from './Description';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Channel = (context) =>
	<div className="channel">
		<ChannelIcon { ...context }/>
		<Description { ...context }/>
		<div className="VideoOption"><MoreVertIcon/></div>
	</div>;

export default Channel;
