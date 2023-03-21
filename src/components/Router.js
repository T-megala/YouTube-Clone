import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoutesData from '../Data/Routes';

const Router = (context) =>
	<Routes>{ RoutesData.map(({ path, element }, i) =>
		<Route
			key={ i }
			path={ path }
			element={ element({ ...{ ...context, path }}) }
		/>)}
	</Routes>;

export default Router;
