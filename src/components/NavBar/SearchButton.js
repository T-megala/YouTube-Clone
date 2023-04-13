import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const SearchButton = (context) => {
	const { state } = context;

	return <Link	to={ `/search/${ state.input }` }>
		<Tooltip title="search">
			<button className="searchButton">
				<SearchIcon/>
			</button>
		</Tooltip>
	</Link>;
};

export default SearchButton;
