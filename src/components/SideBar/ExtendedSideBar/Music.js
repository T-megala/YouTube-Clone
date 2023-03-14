import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const Music = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>Music</div>
		</div>
	</div>;

export default Music;
