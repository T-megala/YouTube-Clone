import React from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import VoiceSearch from './VoiceSearch';

const Center = (context) =>
	<div className="nav-Center">
		<SearchBar { ...context }/>
		<SearchButton { ...context }/>
		<VoiceSearch { ...context }/>
	</div>;

export default Center;
