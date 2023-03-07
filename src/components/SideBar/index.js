/* eslint-disable max-lines-per-function */
import React from 'react';

const Index = (context) => {
	const { sideBar } = context;

	return 	<div className="sideBar">
		{sideBar.map((bar, i) =>
			<div Key={ i }className="bar">
				{bar.icon}
				<div className="text">{bar.text}</div>
			</div>)}
	</div>;
};

export default Index;
