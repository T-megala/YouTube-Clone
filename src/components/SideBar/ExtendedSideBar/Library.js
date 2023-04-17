import React from 'react';
import SideBar from '../SideBar';
import LibraryBody from './LibraryBody';

const Library = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<LibraryBody { ...context }/>
	</div>;

export default Library;
