import React from 'react';
import CategoryLogos from './CategoryLogos';

const CategoryName = (context) => {
	const { config: { browseCategories }} = context;

	return browseCategories.map((category, key) =>
		<div key={ key } className="categoryName">
			{category}
			<CategoryLogos { ...context }/>
		</div>);
};

export default CategoryName;
