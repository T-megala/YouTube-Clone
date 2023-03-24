/* eslint-disable max-lines-per-function */
import { React } from 'react';
import FilterContent from '../FilterContent/FilterContent';
import VideoCardContainer from './VideoCardContainer';

const VideoCard = (context) =>
	<div className="videoCard">
		<FilterContent { ...context }/>
		<VideoCardContainer { ...context }/>
	</div>;

export default VideoCard;
