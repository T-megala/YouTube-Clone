import { React } from 'react';
import './App.scss';
import Index from './components/SideBar';
import sideBar from './Data/sideBar';

const App = (context) => {
	const extendedContext = { ...context, sideBar };

	return <div className="App">
		<Index { ...extendedContext }/>
	</div>;
};

export default App;
