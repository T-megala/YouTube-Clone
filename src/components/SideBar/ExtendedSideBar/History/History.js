import React from 'react';
import SideBar from '../../SideBar';
import HistoryOptions from './HistoryOptions';
import VideoHistory from './VideoHistory';

const History = (context) =>
	<div className="container">
		<SideBar { ...context }/>
		<div className="hist">
			<VideoHistory { ...context }/>
			<HistoryOptions/>
		</div>
	</div>;

export default History;
