import { Button } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SignIn = () =>
	<div style={ { display: 'inline-block' } }>
		<Button
			sx={ { marginLeft: '10%',
				position: 'absolute',
				top: '7%' } }
			size="xlarge"
			startIcon={ <AccountCircleIcon/> }
		>SignIn</Button>
	</div>;

export default SignIn;
