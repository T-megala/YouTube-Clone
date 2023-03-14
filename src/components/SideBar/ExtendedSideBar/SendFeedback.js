import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const SendFeedback = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>SendFeedback</div>
		</div>
	</div>;

export default SendFeedback;
