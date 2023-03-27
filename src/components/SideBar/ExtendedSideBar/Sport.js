import React from 'react';
import SideBar from '../SideBar';

const Sport = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Sport</div>
	</div>;

export default Sport;
