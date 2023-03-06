/* eslint-disable max-lines-per-function */
import React from 'react';

const Index = (context) => {
	const { sideBar } = context;

	return sideBar.map((bar, i) =>
		<div Key={ i } className="sideBar">
			<div className="bar">
				{bar.icon}
				<div className="text">{bar.text}</div>
			</div>
		</div>);
};

export default Index;
