import { React } from 'react';
import './App.scss';
import SideBar from './components/SideBar/SideBar';
import VideoCard from './components/VideoCard/VideoCard';
import NavBar from './components/NavBar/NavBar';
import sideBar from './Data/sideBar';

const App = (context) => {
	const extendedContext = { ...context, sideBar };

	return (
		<div className="App">
			<NavBar/>
			<SideBar { ...extendedContext }/>
			<VideoCard { ...extendedContext }/>
		</div>);
};

export default App;
