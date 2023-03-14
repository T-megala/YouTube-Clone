import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const News = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>News</div>
		</div>
	</div>;

export default News;
