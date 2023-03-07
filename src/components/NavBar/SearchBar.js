import { TextField } from '@mui/material';
import React from 'react';

const SearchBar = () =>
	<div className="textField">
		<TextField
			sx={ { width: '100%' } }
			placeholder="Search..."
			size="small"
			onClick={ () => {} }
		>Search
		</TextField>

	</div>;

export default SearchBar;
