/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import SideBar from '../../SideBar';
import ShortsContainer from './ShortsContainer';

const Shorts = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<ShortsContainer { ...context }/>
	</div>;

export default Shorts;
