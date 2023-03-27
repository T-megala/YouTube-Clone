import React from 'react';
import SideBar from '../SideBar';

const Music = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Music</div>
	</div>;

export default Music;
