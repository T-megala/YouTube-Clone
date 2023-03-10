import React from 'react';
import { Tab, Tabs } from '@mui/material';

const FilterContent = (context) => {
	const { config: { categories }} = context;

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
						label={ category }
					/>)
			}
			</Tabs>
		</div>
	);
};

export default FilterContent;
