import { Button, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () =>
	<div className="textField">
		<TextField
			placeholder="Search..."
			size="small"
			onClick={ () => {} }
		>Search
		</TextField>
		<span className="searchIcon">
			<Button
				endIcon={ <SearchIcon/> }
			/>
		</span>
	</div>;

export default SearchBar;
