import { Button } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const More = () =>
	<Button
		sx={ { color: 'black' } }
		size="xlarge"
		startIcon={ <MoreVertIcon/> }
	/>;

export default More;
