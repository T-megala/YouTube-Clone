import { React, useState } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import RouteCategory from './components/RouteCategory';

const initialState = {
	burgerMenu: true,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<BrowserRouter>
				<RouteCategory { ...extendedContext }/>
			</BrowserRouter>
		</div>

	);
};

export default App;
