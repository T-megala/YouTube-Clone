import { React } from 'react';

const Video = ({ data: detail }) =>
	<div className="video">
		<img
			alt="thumbnail"
			src={ detail.img }
			height="180px"
		/>
	</div>;

export default Video;
