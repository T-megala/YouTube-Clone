import { React } from 'react';
import './App.scss';
import Index from './components/SideBar';
import VideoDetails from './components/VideoDetails';
import NavBar from './components/NavBar/NavBar';

const App = () =>
	<div className="App">
		<Index/>
		<VideoDetails/>
		<NavBar/>
	</div>;

export default App;
