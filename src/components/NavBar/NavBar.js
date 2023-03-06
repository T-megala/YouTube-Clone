import { Menu } from '@mui/icons-material';
import React from 'react';
import Logo from './Logo';
import More from './More';
import SearchBar from './SearchBar';
import SignIn from './SignIn';
import VoiceSearch from './VoiceSearch';

const NavBar = () =>
	<div className="navBar">
		<div className="navLeft">
			<Menu/>
			<Logo/>
		</div>
		<SearchBar/>
		<VoiceSearch/>
		<div className="optAndSignIn">
			<More/>
			<SignIn/>
		</div>
	</div>;

export default NavBar;
