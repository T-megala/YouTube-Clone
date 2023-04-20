import React from 'react';
import SideBar from '../SideBar';
import Banner from './Carousel/Banner';

const FashionBeauty = (context) => {
	const { config: { fashionBanner }} = context;

	return <div className="container">
		<SideBar { ...context }/>
		<Banner { ...{ ...context, data: fashionBanner } }/>
	</div>;
};

export default FashionBeauty;
