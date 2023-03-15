import { React } from 'react';

const Thumbnail = ({ data: detail }) =>
	<div className="thumbnail">
		<img
			alt="thumbnail"
			src={ detail.img }
			height="180px"
			width="100%"
		/>
	</div>;

export default Thumbnail;
