import { React } from 'react';

const Thumbnail = ({ data: detail }) =>
	<img
		alt="thumbnail"
		src={ detail.img }
		height="190px"
		width="340px"
		style={ { borderRadius: '15px' } }
	/>;

export default Thumbnail;
