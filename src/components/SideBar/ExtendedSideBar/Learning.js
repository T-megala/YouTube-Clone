import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const Learning = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>Learning</div>
		</div>
	</div>;

export default Learning;
