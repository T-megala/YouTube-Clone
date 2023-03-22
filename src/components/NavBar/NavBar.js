import React from 'react';
import Center from './Center';
import Left from './Left';
import Right from './Right';

const NavBar = (context) =>
	<div className="navBar">
		<Left { ...context }/>
		<Center/>
		<Right/>
	</div>;

export default NavBar;
