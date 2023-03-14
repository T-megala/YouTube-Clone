import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const History = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>History</div>
		</div>
	</div>;

export default History;
