import { React } from 'react';
import Channel from './Channel';

const Videos = ({ data: text }) =>
	<div className="video">{text}</div>;

const VideoDetails = (context) => {
	const { config: { test }} = context;

	return <div className="container">
		{test.map((text, key) =>
			<div key={ key } className="box-1">
				<Videos { ...{ ...context, data: text } }/>
				<Channel { ...context }/>
			</div>)}
	</div>;
};

export default VideoDetails;
