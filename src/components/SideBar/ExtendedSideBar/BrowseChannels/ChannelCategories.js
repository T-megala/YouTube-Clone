/* eslint-disable max-len */
import React from 'react';
import CategoryName from './CategoryName';

const ChannelCategories = (context) =>
	<div className="channelCategories">
		<CategoryName { ...context }/>
	</div>;

export default ChannelCategories;
