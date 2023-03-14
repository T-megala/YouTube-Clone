import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const Help = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>Help</div>
		</div>
	</div>;

export default Help;
