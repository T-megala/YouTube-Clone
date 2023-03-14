import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const Films = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>Films</div>
		</div>
	</div>;

export default Films;
