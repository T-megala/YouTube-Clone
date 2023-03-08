import React from 'react';
import FilterTab from './FilterTab';

const FilterContent = (context) =>
	<div className="filterContent">
		<FilterTab { ...context }/>
	</div>;

export default FilterContent;
