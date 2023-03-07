import { Button } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const More = () =>
	<Button
		sx={ { color: 'black' } }
		startIcon={ <MoreVertIcon/> }
		size="xlarge"
	/>;

export default More;
