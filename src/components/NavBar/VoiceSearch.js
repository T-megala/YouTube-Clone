import { Button } from '@mui/material';
import React from 'react';
import MicIcon from '@mui/icons-material/Mic';

const VoiceSearch = () =>
	<Button
		className="voiceSearch"
		sx={ { paddingLeft: '5%', color: 'black' } }
		size="xlarge"
		startIcon={ <MicIcon/> }
	/>;

export default VoiceSearch;
