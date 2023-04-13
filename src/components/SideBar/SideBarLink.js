import React from 'react';
import { Link } from 'react-router-dom';

const SideBarLink = ({ category, context }) => {
	const { state, setState } = context;

	return (
		<Link
			onClick={ () => setState({
				...state,
				input: '',
			}) }

			to={ `/${ category.text === 'Home' ? '' : category.text }` }
			style={ { textDecoration: 'none', color: 'black' } }
			className="sideBarCategory"
		>
			<span className="sideBarIcon">{category.icon}</span>
			<span className="sideBarText">{category.text}</span>
		</Link>
	);
};

export default SideBarLink;
