import React from 'react';
import SideBar from '../SideBar';

const Films = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Films</div>
	</div>;

export default Films;
