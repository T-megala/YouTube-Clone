import { Button } from '@mui/material';
import React from 'react';

const SubscribeButton = () =>
	<Button
		className="subscribeButton"
		variant="outlined"
		sx={ {
			':hover': {
				bgcolor: '#8ec2ef',
			},
			'borderRadius': '50px ',
			'marginTop': '15%',
		} }
		size="small"
	>Subscribe
	</Button>;

export default SubscribeButton;
