import { React, useState } from 'react';
import './App.scss';
import SideBar from './components/SideBar/SideBar';
import VideoCard from './components/VideoCard/VideoCard';
import NavBar from './components/NavBar/NavBar';
import sideBar from './Data/sideBar';

const initialState = {
	burgerMenu: true,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState, sideBar };

	return (
		<div className="App">
			<NavBar { ...extendedContext }/>
			<SideBar { ...extendedContext }/>
			<VideoCard { ...extendedContext }/>
		</div>);
};

export default App;
