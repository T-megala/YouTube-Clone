import React from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import VoiceSearch from './VoiceSearch';

const Center = () =>
	<div className="nav-Center">
		<SearchBar/>
		<SearchButton/>
		<VoiceSearch/>
	</div>;

export default Center;
