import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const SearchButton = (context) => {
	const { state } = context;

	return <Link	to={ `/search/${ state.input }` }>
		<button className="searchButton">
			<SearchIcon/>
		</button>
	</Link>;
};

export default SearchButton;
