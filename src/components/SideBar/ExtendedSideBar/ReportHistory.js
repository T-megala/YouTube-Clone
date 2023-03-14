import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const ReportHistory = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>ReportHistory</div>
		</div>
	</div>;

export default ReportHistory;
