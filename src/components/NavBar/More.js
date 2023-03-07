import { Button } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const More = () =>
	<Button
		className="moreButton"
		sx={ { marginLeft: '55%' } }
		startIcon={ <MoreVertIcon/> }
		size="xlarge"
	/>;

export default More;
