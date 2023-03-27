/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import SideBar from '../../SideBar';
import ShortsVideo from './ShortsVideo';

const Shorts = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<ShortsVideo { ...context }/>
	</div>;

export default Shorts;
