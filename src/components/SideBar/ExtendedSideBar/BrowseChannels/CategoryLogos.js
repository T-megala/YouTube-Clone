import { Avatar } from '@mui/material';
import React from 'react';
import SubscribeButton from './SubscribeButton';

const CategoryLogos = ({ data: { collections }}) =>
	<div className="categoryContainer">
		{collections.map((channel, key) =>
			<div key={ key } className="categoryLogo">
				<Avatar
					alt="img"
					src={ channel.image }
					sx={ { width: 100, height: 100 } }
				/>
				<div>{channel.category}</div>
				<div className="subsCount">{channel.subscribers}</div>
				<SubscribeButton/>
			</div>)}
	</div>;

export default CategoryLogos;
