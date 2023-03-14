import { React, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';

const initialState = {
	burgerMenu: true,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<BrowserRouter>
				<Router { ...extendedContext }/>
			</BrowserRouter>
		</div>

	);
};

export default App;
