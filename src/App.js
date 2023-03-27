import { React, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import NavBar from './components/NavBar/NavBar';

const initialState = (context) => {
	const { config: { cardDetails }} = context;

	return {
		burgerMenu: true,
		videoDetails: cardDetails,
		filters: 'All',
		history: [],
	};
};

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<NavBar { ...context }/>
			<BrowserRouter>
				<Router { ...extendedContext }/>
			</BrowserRouter>
		</div>
	);
};

export default App;
