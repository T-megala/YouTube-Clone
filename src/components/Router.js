import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RoutesData from '../Data/Routes';
import SearchInputs from './SearchInputs';

const Router = (context) =>
	<Routes>
		{RoutesData.map(({ path, element }, i) =>
			<Route
				key={ i }
				path={ path }
				element={ element({ ...context, path }) }
			/>)}
		<Route
			path="/search/:id"
			element={ <SearchInputs { ...context }/> }
		/>
	</Routes>;

export default Router;
