import { React } from 'react';
import Channel from './Channel';
import Video from './Video';

const VideoCard = (context) => {
	const { config: { cardDetails }} = context;

	return (
		<div className="videoCard">
			{cardDetails.map((detail, key) =>
				<div
					key={ key }
					className="box-1"
				>
					<Video { ...{ ...context, data: detail } }/>
					<Channel { ...{ ...context, data: detail } }/>
				</div>)}
		</div>);
};

export default VideoCard;
