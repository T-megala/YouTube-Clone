import { React } from 'react';
import './App.scss';
import Index from './components/SideBar';
import VideoDetails from './components/VideoDetails';

const App = (context) =>
	<div className="App">
		<Index/>
		<VideoDetails { ...context }/>
	</div>;

export default App;
