import React from 'react';
import NavBar from '../../../NavBar/NavBar';
import SideBar from '../../SideBar';
import HistoryOptions from './HistoryOptions';
import VideoHistory from './VideoHistory';

const History = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div className="hist">
				<VideoHistory { ...context }/>
				<HistoryOptions { ...context }/>
			</div>
		</div>
	</div>;

export default History;
