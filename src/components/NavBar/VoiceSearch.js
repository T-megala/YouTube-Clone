import { Button } from '@mui/material';
import React from 'react';
import MicIcon from '@mui/icons-material/Mic';

const VoiceSearch = () =>
	<Button
		sx={ {
			':hover': {
				bgcolor: '#d3d3d3',
			},
			'borderRadius': '50px ',
			'color': 'black',
		} }
		size="xlarge"
		startIcon={ <MicIcon/> }
	/>;

export default VoiceSearch;
