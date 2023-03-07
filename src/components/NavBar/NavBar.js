import React from 'react';
import Logo from './Logo';
import More from './More';
import SearchBar from './SearchBar';
import SignIn from './SignIn';
import VoiceSearch from './VoiceSearch';

const NavBar = () =>
	<div className="navBar">
		<Logo/>
		<SearchBar/>
		<VoiceSearch/>
		<div className="optAndSignIn">
			<More/>
			<SignIn/>
		</div>
	</div>;

export default NavBar;
