import React from 'react';

const SideBar = (context) => {
	const { sideBar } = context;

	return (
		<div className="sideBar">
			{sideBar.map((category, i) =>
				<div
					Key={ i }
					className="categoryBar"
				>
					{category.icon}
					<div className="categoryText">
						{category.text}
					</div>
				</div>)}
		</div>);
};

export default SideBar;
