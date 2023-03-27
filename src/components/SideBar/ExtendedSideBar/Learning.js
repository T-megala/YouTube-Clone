import React from 'react';
import SideBar from '../SideBar';

const Learning = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Learning</div>
	</div>;

export default Learning;
