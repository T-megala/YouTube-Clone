import { TextField } from '@mui/material';
import React from 'react';

const SearchBar = (context) => {
	const { setState, state } = context;

	return (
		<TextField
			className="searchBar"
			placeholder="Search..."
			size="small"
			onChange={ ({ target: { value }}) => setState({
				...state,
				input: value,
			}) }
		>Search
		</TextField>
	);
};

export default SearchBar;
