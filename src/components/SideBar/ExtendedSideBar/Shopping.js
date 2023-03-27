import React from 'react';
import SideBar from '../SideBar';

const Shopping = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Shopping</div>
	</div>;

export default Shopping;
