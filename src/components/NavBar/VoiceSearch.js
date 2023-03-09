import { Button } from '@mui/material';
import React from 'react';
import MicIcon from '@mui/icons-material/Mic';

const VoiceSearch = () =>
	<Button
		sx={ { color: 'black' } }
		size="xlarge"
		startIcon={ <MicIcon/> }
	/>;

export default VoiceSearch;
