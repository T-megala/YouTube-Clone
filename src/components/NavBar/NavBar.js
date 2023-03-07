import React from 'react';
import NavCenter from './NavCenter';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

const NavBar = () =>
	<div className="navBar">
		<NavLeft/>
		<NavCenter/>
		<NavRight/>
	</div>;

export default NavBar;
