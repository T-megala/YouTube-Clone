import React from 'react';
import ManageHistory from './ManageHistory';
import RadioButtons from './RadioButtons';
import Search from './Search';

const HistoryOptions = () =>
	<div className="historyOptionsContainer">
		<Search/>
		<RadioButtons/>
		<ManageHistory/>
	</div>;

export default HistoryOptions;
