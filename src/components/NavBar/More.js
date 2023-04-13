import { Button, Tooltip } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const More = () =>
	<Tooltip title="Settings">
		<Button
			sx={ { color: 'black' } }
			size="xlarge"
			startIcon={ <MoreVertIcon/> }
		/>
	</Tooltip>;

export default More;
