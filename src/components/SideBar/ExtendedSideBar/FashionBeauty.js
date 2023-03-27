import React from 'react';
import SideBar from '../SideBar';

const FashionBeauty = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div>FashionBeauty</div>
	</div>;

export default FashionBeauty;
