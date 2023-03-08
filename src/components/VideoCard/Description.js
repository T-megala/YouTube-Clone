import { React } from 'react';

const Description = ({ data: detail }) =>
	<div className="description">
		<div className="videoName">{detail.videoName}</div>
		 <div className="channelName">{detail.channelName}</div>
		<div
			className="views"
			style={ { display: 'inline-block' } }
		>{detail.views}
		 </div>
		 <div className="time">{detail.time}</div>
	</div>;

export default Description;
