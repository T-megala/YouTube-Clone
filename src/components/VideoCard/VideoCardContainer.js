/* eslint-disable max-lines-per-function */
import React from 'react';
import { Link } from 'react-router-dom';
import youtubeManager from '../../services/youtubeManager';
import Channel from './Channel';
import Thumbnail from './Thumbnail';

const VideoCardContainer = (context) => {
	const { state: { filters, history }, state, setState } = context;
	const filteredContent = youtubeManager.filter[filters](context);

	return <div className="videoCard_container">
		{filteredContent.map((detail, key) =>
			<div
				key={ key }
				className="videoCard_video"
			>
				<Link
					onClick={ () => setState({
						...state,
						selectedId: detail.video,
						selectedVideo: detail.videoName,
						selectedChannel: detail.channelName,
						selectedIcon: detail.icon,
						history: [...history, detail],
					}) }
					to={ `/video${ detail.id }` }
					style={ { textDecoration: 'none', color: 'black' } }
					className="box-1"
				>
					<Thumbnail { ...{ ...context, data: detail } }/>
					<Channel { ...{ ...context, data: detail } }/>
				</Link>
			</div>)}
	</div>;
};

export default VideoCardContainer;
