import React from 'react';
import { Link } from 'react-router-dom';
import Channel from '../../../VideoCard/Channel';
import Thumbnail from '../../../VideoCard/Thumbnail';

const GamingVideos = (context) => {
	const { config: { cardDetails }} = context;
	const gamingVideos = cardDetails.filter((detail) =>
		detail.category === 'Gaming');

	return <div className="gamingContainer">
		{gamingVideos.map((detail, key) =>
			<div key={ key }>
				<Link
					to={ `/gaming${ detail.id }` }
					style={ { textDecoration: 'none', color: 'black' } }
					className="box-1"
				>
					<Thumbnail { ...{ ...context, data: detail } }/>
					<Channel { ...{ ...context, data: detail } }/>
				</Link>
			</div>)}
	</div>;
};

export default GamingVideos;
