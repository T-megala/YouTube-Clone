import { Avatar } from '@mui/material';
import React from 'react';
import bestOfYt from '../../../../Data/bestOfYt';
import SubscribeButton from './SubscribeButton';

const CategoryLogos = () =>
	<div className="categoryContainer">
		{bestOfYt.map((channel, key) =>
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
