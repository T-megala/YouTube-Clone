import { Avatar } from '@mui/material';
import React from 'react';

const Description = ({ data: { cardDetail }}) =>
	<div className="overlay">
		{cardDetail.videoName}
		<br/>
		<div
			className="channel"
			style={ { marginTop: '5%' } }
		>
			<Avatar
				sx={ { display: 'inline-block' } }
				alt="icon"
				src={ cardDetail.icon }
			/>
			{`	@${ cardDetail.channelName }`}
		</div>
	</div>
	;

export default Description;
