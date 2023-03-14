import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const Sport = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>Sport</div>
		</div>
	</div>;

export default Sport;
