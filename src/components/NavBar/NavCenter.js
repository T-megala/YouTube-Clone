import React from 'react';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import VoiceSearch from './VoiceSearch';

const NavCenter = () =>
	<div className="navCenter">
		<SearchBar/>
		<SearchButton/>
		<VoiceSearch/>
	</div>;

export default NavCenter;
