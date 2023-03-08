/* eslint-disable indent */
import { Tab, Tabs } from '@mui/material';
import React from 'react';

const FilterTab = (context) => {
	const { config: { categories }} = context;

	return (
		<div className="filterTab">
			<Tabs
				variant="scrollable"
				scrollButtons="auto"
			>{categories.map((category, i) =>
				<Tab key={ i } label={ category }/>)}
			</Tabs>
		</div>
	);
};

export default FilterTab;
