import { React, useState } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import FilterContent from './components/FilterContent/FilterContent';
import Container from './components/Container';

const initialState = {
	burgerMenu: true,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<NavBar { ...extendedContext }/>
			<FilterContent { ...extendedContext }/>
			<Container { ...extendedContext }/>
		</div>);
};

export default App;
