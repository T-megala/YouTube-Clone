import React from 'react';
import SideBar from '../SideBar';

const Trending = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>Trending</div>
	</div>;

export default Trending;
