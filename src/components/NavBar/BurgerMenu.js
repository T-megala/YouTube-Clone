import { Menu } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const BurgerMenu = (context) => {
	const { state, state: { burgerMenu }, setState } = context;

	return (
		<Button>
			<Menu
				sx={ {
					marginLeft: '-40px',
					color: 'black',
				} }
				onClick={ () => setState({
					...state,
					burgerMenu: !burgerMenu,
				}) }
			/>
		</Button>
	);
};

export default BurgerMenu;
