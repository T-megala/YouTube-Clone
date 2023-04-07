/* eslint-disable max-lines-per-function */
import React from 'react';
import { Avatar, Button } from '@mui/material';

const Left = (context) => {
	const { state: { selectedChannel, selectedIcon }} = context;

	return (
		<div
			className="channel"
			style={ { flex: 1 } }
		>
			<Avatar
				alt="icon"
				src={ selectedIcon }
			/>
			<div style={ { fontWeight: '600' } }>{selectedChannel}</div>
			<Button
				variant="contained"
				sx={ {
					borderRadius: '20px',
					backgroundColor: 'black',
					marginRight: '10%',
				} }
			>subscribe</Button>
		</div>
	);
};

export default Left;
