import { React } from 'react';

const Thumbnail = ({ data: detail }) =>
	<img
		className="thumbnail"
		alt="thumbnail"
		src={ detail.img }
	/>;

export default Thumbnail;
