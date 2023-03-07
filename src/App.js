import { React } from 'react';
import './App.scss';
import Index from './components/SideBar';
import VideoDetails from './components/VideoDetails';
import NavBar from './components/NavBar/NavBar';

const App = (context) =>
	<div className="App">
		<NavBar/>
		<Index/>
		<VideoDetails { ...context }/>
	</div>;

export default App;
