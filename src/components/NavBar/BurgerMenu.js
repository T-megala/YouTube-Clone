/* eslint-disable max-lines-per-function */
import { Menu } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const BurgerMenu = (context) => {
	const { state, state: { burgerMenu }, setState } = context;

	return (
		<Button
			sx={ {
				':hover': {
					bgcolor: '#d3d3d3',
				},
				'color': 'black',
				'borderRadius': '100px',
			} }
		>
			<Menu
				onClick={ () => setState({
					...state,
					burgerMenu: !burgerMenu,
				}) }
			/>
		</Button>
	);
};

export default BurgerMenu;
