import React from 'react';
import SideBar from '../SideBar';

const Help = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Help</div>
	</div>;

export default Help;
