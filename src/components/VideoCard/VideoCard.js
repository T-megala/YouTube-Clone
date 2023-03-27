import { React } from 'react';
import FilterContent from '../FilterContent/FilterContent';

const VideoCard = (context) =>
	<div className="videoCard">
		<FilterContent { ...context }/>
	</div>;

export default VideoCard;
