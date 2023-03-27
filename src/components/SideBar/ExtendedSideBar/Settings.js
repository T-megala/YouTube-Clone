import React from 'react';
import SideBar from '../SideBar';

const Settings = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Settings</div>
	</div>;

export default Settings;
