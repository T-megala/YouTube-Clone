import { React } from 'react';

const Thumbnail = ({ data: detail }) =>
	<div className="thumbnail">
		<img
			alt="thumbnail"
			src={ detail.img }
			height="180px"
		/>
	</div>;

export default Thumbnail;
