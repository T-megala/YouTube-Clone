import { SearchOutlined } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';

const Search = () =>
	<div>
		<TextField
			InputProps={ {
				startAdornment:
	<InputAdornment position="start">
		<SearchOutlined/>
	</InputAdornment>
				,
			} }
			placeholder="Search watch history"
			variant="standard"
		/>
	</div>;

export default Search;
