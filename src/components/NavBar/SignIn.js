import { Button } from '@mui/material';
import React from 'react';
import { AccountCircleOutlined } from '@mui/icons-material';

const SignIn = () =>
	<div>
		<Button
			size="xlarge"
			startIcon={ <AccountCircleOutlined/> }
		>Sign In
		</Button>
	</div>;

export default SignIn;
