import { React, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import { peek } from '@laufire/utils/debug';

const initialState = (context) => {
	const { config: { cardDetails }} = context;

	return {
		burgerMenu: true,
		videoDetails: cardDetails,
		filters: 'All',
	};
};

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	peek(state.videoDetails);
	return (
		<div className="App">
			<BrowserRouter>
				<Router { ...extendedContext }/>
			</BrowserRouter>
		</div>
	);
};

export default App;
