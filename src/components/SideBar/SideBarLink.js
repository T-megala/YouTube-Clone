import React from 'react';
import { Link } from 'react-router-dom';

const SideBarLink = ({ category }) =>
	<Link
		to={ `/${ category.text === 'Home' ? '' : category.text }` }
		style={ { textDecoration: 'none', color: 'black' } }
		className="sideBar_category"
	>
		<span className="sideBar_icon">{category.icon}</span>
		<span className="sideBar_text">{category.text}</span>
	</Link>;

export default SideBarLink;
