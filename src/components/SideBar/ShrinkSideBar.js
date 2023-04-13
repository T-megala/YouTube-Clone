import React from 'react';
import { Link } from 'react-router-dom';
import shrinkSideBar from '../../Data/shrinkSideBar';

const ShrinkSideBar = () =>
	<div className="shrinkSideBar">{
		shrinkSideBar.map((bar, i) =>
			<Link
				key={ i }
				to={ `/${ bar.text === 'Home' ? '' : bar.text }` }
				style={ { textDecoration: 'none', color: 'black' } }
				className="shrinkSideBar"
			>
				<span className="shrinkBarIcon">{bar.icon}</span>
				<span className="shrinkBarText">{bar.text}</span>
			</Link>)
	}
	</div>;

export default ShrinkSideBar;
