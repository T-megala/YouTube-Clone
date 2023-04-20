import React from 'react';
import SideBar from '../SideBar';
import Banner from './Carousel/Banner';

const Learning = (context) => {
	const { config: { learningBanner }} = context;

	return <div className="container">
		<SideBar { ...context }/>
		<Banner { ...{ ...context, data: learningBanner } }/>
	</div>;
};

export default Learning;
