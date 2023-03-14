import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoutesData from '../Data/Routes';

const RouteCategory = (context) =>
	<Routes>{ RoutesData.map((route, i) =>
		<Route
			key={ i }
			path={ route.path }
			element={ <route.element { ...context }/> }
		/>)}
	</Routes>;

export default RouteCategory;
