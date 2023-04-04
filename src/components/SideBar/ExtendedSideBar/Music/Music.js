import React from 'react';
import SideBar from '../../SideBar';
import MusicCarousel from './MusicCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Music = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<MusicCarousel/>
	</div>;

export default Music;
