import React from 'react';
import ShrinkSideBar from './ShrinkSideBar';

const SideBar = (context) => {
	const { state: { burgerMenu }, sideBar } = context;

	return burgerMenu
		? <div className="sideBar">
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
		</div>
		: <ShrinkSideBar/> ;
};

export default SideBar;
