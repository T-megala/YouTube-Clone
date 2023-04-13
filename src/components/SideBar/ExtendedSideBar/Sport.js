import React from 'react';
import SideBar from '../SideBar';
import Banner from './Carousel/Banner';

const Sport = (context) => {
	const { config: { sportsBanner }} = context;

	return <div className="container">
		<SideBar { ...context }/>
		<Banner { ...{ ...context, data: sportsBanner } }/>
	</div>;
};

export default Sport;
