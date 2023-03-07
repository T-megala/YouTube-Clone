import { React } from 'react';
import './App.scss';
import Index from './components/SideBar';
import VideoDetails from './components/VideoDetails';
import NavBar from './components/NavBar/NavBar';
import sideBar from './Data/sideBar';

const App = (context) => {
	const extendedContext = { ...context, sideBar };

	return (
		<div className="App">
			<NavBar/>
			<Index { ...extendedContext }/>
			<VideoDetails { ...extendedContext }/>
		</div>);
};

export default App;
