/* eslint-disable max-lines-per-function */
import { Tab, Tabs } from '@mui/material';
import React from 'react';

const FilterTab = (context) => {
	const { config: { categories }} = context;

	return (
		<div className="filterTab">
			<Tabs
				variant="scrollable"
				scrollButtons="auto"
			>{
					categories.map((category, i) =>
						<Tab
							key={ i }
							sx={ { backgroundColor: 'rgb(231, 221,291)',
								marginLeft: '20px',
								borderRadius: '20% ',
								height: '50px' } }
							label={ category }
						/>)
				}
			</Tabs>
		</div>
	);
};

export default FilterTab;
