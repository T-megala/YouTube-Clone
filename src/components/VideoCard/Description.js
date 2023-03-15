import { React } from 'react';

const Description = ({ data: detail }) =>
	<div className="description">
		<div className="videoName">{detail.videoName}</div>
		 <div className="channelName">{detail.channelName}</div>
		 <div className="viewsAndTime">
			<div className="views">{detail.views}</div>
			<div className="time">{detail.time}</div>
		 </div>
	</div>;

export default Description;
