import { React } from 'react';
import './App.scss';
import Index from './components/SideBar';
import VideoDetails from './components/VideoDetails';

const App = () =>
	<div className="App">
		<Index/>
		<VideoDetails/>
	</div>;

export default App;
