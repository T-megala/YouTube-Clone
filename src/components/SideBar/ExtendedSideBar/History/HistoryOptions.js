import React from 'react';
import historyButtons from '../../../../Data/historyButtons';

const HistoryOptions = (context) =>
	historyButtons.map((button, key) =>
		<div key={ key } className="historyOptions">
			<span>{button.icon}</span>
			<span>{button.text}</span>
		</div>);

export default HistoryOptions;
