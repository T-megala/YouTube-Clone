import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const FashionBeauty = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div>FashionBeauty</div>
		</div>
	</div>;

export default FashionBeauty;
