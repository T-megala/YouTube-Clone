import React from 'react';
import SideBar from '../../SideBar';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from '../Carousel/Banner';

const Music = (context) => {
	const { config: { musicBanner }} = context;

	return <div className="container">
		<SideBar { ...context }/>
		<Banner { ...{ ...context, data: musicBanner } }/>
	</div>;
};

export default Music;
