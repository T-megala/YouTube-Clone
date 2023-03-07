import { React } from 'react';
import Channel from './Channel';
import Video from './Video';

const VideoCard = (context) => {
	const { config: { test }} = context;

	return (
		<div className="container">
			{test.map((text, key) =>
				<div
					key={ key }
					className="box-1"
				>
					<Video { ...{ ...context, data: text } }/>
					<Channel { ...context }/>
				</div>)}
		</div>);
};

export default VideoCard;
