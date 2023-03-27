import React from 'react';
import SideBar from '../SideBar';

const News = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>News</div>
	</div>;

export default News;
