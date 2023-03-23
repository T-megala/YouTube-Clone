import { Button } from '@mui/material';
import React from 'react';
import { AccountCircleOutlined } from '@mui/icons-material';

const SignIn = () =>
	<Button
		variant="outlined"
		sx={ {
			':hover': {
				bgcolor: '#8ec2ef',
			},
			'borderRadius': '50px ',
		} }
		size="xlarge"
		startIcon={ <AccountCircleOutlined/> }
		onClick={ () => window.location.replace('http://localhost:1234/login') }
	>Sign In
	</Button>;

export default SignIn;
