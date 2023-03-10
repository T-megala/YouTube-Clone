import React from 'react';
import sideBar from '../../Data/sideBar';

const ExtendedSideBar = () =>
	<div className="sideBar">
		{sideBar.map((category, i) =>
			<div
				Key={ i }
				className="sideBar_category"
			>
				<span className="sideBar_icon">{category.icon}</span>
				<span className="sideBar_text">{category.text}</span>
			</div>)}
	</div>;

export default ExtendedSideBar;
