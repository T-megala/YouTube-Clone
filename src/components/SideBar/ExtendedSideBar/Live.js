import React from 'react';
import SideBar from '../SideBar';

const Live = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Live</div>
	</div>;

export default Live;
