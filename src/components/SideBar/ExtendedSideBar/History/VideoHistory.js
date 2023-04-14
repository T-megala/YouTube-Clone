/* eslint-disable max-lines-per-function */
import React from 'react';
import { Link } from 'react-router-dom';
import youtubeManager from '../../../../services/youtubeManager';
import Channel from '../../../VideoCard/Channel';
import Thumbnail from '../../../VideoCard/Thumbnail';

const VideoHistory = (context) => {
	const { state, setState } = context;
	const sortedHistory = youtubeManager.sortHistory(context);

	return (
		<div className="videoHistoryContainer">
			{sortedHistory.map((detail, key) =>
				<Link
					key={ key }
					onClick={ () => setState({
						...state,
						selectedId: `${ detail.video }`,
					}) }
					to={ `/video${ detail.id }` }
					style={ { textDecoration: 'none', color: 'black' } }
					className="box-1"
				>
					<Thumbnail { ...{ ...context, data: detail } }/>
					<div className="channelOnly">
						<Channel { ...{ ...context, data: detail } }/>
					</div>
				</Link>)}
		</div>
	);
};

export default VideoHistory;
