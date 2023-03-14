import React from 'react';
import shrinkSideBar from '../../Data/shrinkSideBar';

const ShrinkSideBar = () =>
	<div className="shrinkSideBar">
		{
			shrinkSideBar.map((bar, i) =>
				<div key={ i } className="__shrinkSideBar">
					<span className="shrinkBar__icon">{bar.icon}</span>
					<span className="shrinkBar__text">{bar.text}</span>
				</div>)
		}
	</div>;

export default ShrinkSideBar;
