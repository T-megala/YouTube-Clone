import React from 'react';
import CategoryLogos from './CategoryLogos';

const CategoryName = (context) => {
	const { config: { browseCategories }} = context;

	return browseCategories.map((category, key) =>
		<div key={ key } className="categoryName">
			{category.title}
			<CategoryLogos { ...{ ...context, data: category } }/>
			<hr
				style={ {
					width: '99%',
				} }
			/>
		</div>);
};

export default CategoryName;
