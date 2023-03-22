import React from 'react';
import Options from '../VideoCard/Options';
import Center from './Center';
import Left from './Left';
import Right from './Right';

const NavBar = (context) =>
	<div className="navBar">
		<Options { ...context }/>
		<Left { ...context }/>
		<Center/>
		<Right/>
	</div>;

export default NavBar;
