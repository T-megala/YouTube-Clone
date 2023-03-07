import { Menu } from '@mui/icons-material';
import React from 'react';
import Logo from './Logo';

const NavLeft = () =>
	<div className="navLeft">
		<Menu sx={ { marginLeft: '-15px' } }/>
		<Logo/>
	</div>;

export default NavLeft;
