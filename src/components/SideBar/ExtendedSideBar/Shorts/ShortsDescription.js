import { Avatar } from '@mui/material';
import React from 'react';

const Description = ({ data: { cardDetail }}) =>
	<div className="overlay">
		{cardDetail.videoName}
		<br/>
		<Avatar
			sx={ { display: 'inline-block' } }
			alt="icon"
			src={ cardDetail.icon }
		/>
		{`	@${ cardDetail.channelName }`}
	</div>
	;

export default Description;
