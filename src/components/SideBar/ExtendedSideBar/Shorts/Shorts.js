/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import NavBar from '../../../NavBar/NavBar';
import SideBar from '../../SideBar';
import ShortsVideo from './ShortsVideo';

const Shorts = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<ShortsVideo { ...context }/>
		</div>
	</div>;

export default Shorts;
