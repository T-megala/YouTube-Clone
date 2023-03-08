import { React } from 'react';

const Video = ({ data: detail }) =>
	<div className="video">
		<img
			alt="thumbnail"
			src={ detail.img }
		/>
	</div>;

export default Video;
