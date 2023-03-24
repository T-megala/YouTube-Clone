import React from 'react';
import historyButtons from '../../../../Data/historyButtons';

const ManageHistory = () =>
	historyButtons.map((button, key) =>
		<div key={ key } className="manageHistory">
			<span>{button.icon}</span>
			<span>{button.text}</span>
		</div>);

export default ManageHistory;
