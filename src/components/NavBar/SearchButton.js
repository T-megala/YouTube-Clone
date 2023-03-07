import { Button } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchButton = () =>
	<div className="searchButton">
		<Button
			size="xxxlarge"
			sx={ { marginTop: '4%',
				marginLeft: '-10%',
				color: 'black' } }
			endIcon={ <SearchIcon/> }
		/>
	</div>;

export default SearchButton;
