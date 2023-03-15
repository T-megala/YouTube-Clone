/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Tab, Tabs } from '@mui/material';

const FilterContent = (context) => {
	const { config: { categories }, state, setState } = context;

	return (
		<div className="filterContent">
			<Tabs	variant="scrollable">{
				categories.map((category, i) =>
					<Tab
						key={ i }
						sx={ {
							marginLeft: '5px',
							backgroundColor: '#ededed',
							borderRadius: '15px ',
						} }
						onClick={ () => setState({
							...state,
							filters: category,
						}) }
						label={ category }
					/>)
			}
			</Tabs>
		</div>
	);
};

export default FilterContent;
