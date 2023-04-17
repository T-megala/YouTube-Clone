import React from 'react';
import SideBar from '../SideBar';
import SubscriptionsBody from './SubscriptionsBody';

const Subscriptions = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<SubscriptionsBody { ...context }/>
	</div>;

export default Subscriptions;
