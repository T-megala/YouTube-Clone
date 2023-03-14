import React from 'react';
import Container from './Container';
import NavBar from './NavBar/NavBar';

const Home = (context) =>
	<div>
		<NavBar { ...context }/>
		<Container { ...context }/>
	</div>;

export default Home;
