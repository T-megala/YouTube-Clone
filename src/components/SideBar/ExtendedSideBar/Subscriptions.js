import React from 'react';
import SideBar from '../SideBar';

const Subscriptions = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Subscriptions</div>
	</div>;

export default Subscriptions;
