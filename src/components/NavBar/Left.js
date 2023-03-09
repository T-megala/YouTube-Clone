import React from 'react';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';

const Left = (context) =>
	<div className="nav-left">
		<BurgerMenu { ...context }/>
		<Logo/>
	</div>;

export default Left;
