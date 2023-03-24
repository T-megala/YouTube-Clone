import { React } from 'react';

const Description = ({ data: detail }) =>
	<div className="description">
		<span className="videoName">{detail.videoName}</span>
		<span className="channelName">{detail.channelName}</span>
		<div>
			<span className="views">{detail.views}</span>
			<span className="time">{detail.time}</span>
		 </div>
	</div>;

export default Description;
