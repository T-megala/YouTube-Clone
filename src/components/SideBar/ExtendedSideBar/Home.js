/* eslint-disable no-console */
import React from 'react';
import Container from '../../Container';
import NavBar from '../../NavBar/NavBar';
import Cookies from 'js-cookie';
import { peek } from '@laufire/utils/debug';

const Home = (context) => {
	const cookieName = 'userDetail';
	const cookieValue = document.cookie;
	// .split('; ')
	// .find((cookie) => cookie.startsWith(`${cookieName}=`))
	// ?.split('=')[1];

	console.log(cookieValue, 'test');
	peek(Cookies.get('userDetail.j.name'));

	return <div>
		<NavBar { ...context }/>
		<Container { ...context }/>
	</div>;
};

export default Home;
