import React from 'react';
import NavBar from '../../../NavBar/NavBar';
import SideBar from '../../SideBar';
import MusicCarousel from './MusicCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Music = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<MusicCarousel/>
		</div>
	</div>;

export default Music;
