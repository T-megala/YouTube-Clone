import React from 'react';
import Center from './Center';
import Left from './Left';
import Right from './Right';

const NavBar = () =>
	<div className="navBar">
		<Left/>
		<Center/>
		<Right/>
	</div>;

export default NavBar;
