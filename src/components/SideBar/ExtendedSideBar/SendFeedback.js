import React from 'react';
import SideBar from '../SideBar';

const SendFeedback = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>SendFeedback</div>
	</div>;

export default SendFeedback;
