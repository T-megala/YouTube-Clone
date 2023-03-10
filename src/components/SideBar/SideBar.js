import React from 'react';
import ExtendedSideBar from './ExtendedSideBar';
import ShrinkSideBar from './ShrinkSideBar';

const SideBar = (context) => {
	const { state: { burgerMenu }} = context;

	return burgerMenu
		? <ExtendedSideBar/>
		: <ShrinkSideBar/> ;
};

export default SideBar;
