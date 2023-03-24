/* eslint-disable max-lines-per-function */
import React from 'react';
import { Link } from 'react-router-dom';
import youtubeManager from '../../../../services/youtubeManager';
import Description from '../../../VideoCard/Description';
import Thumbnail from '../../../VideoCard/Thumbnail';

const VideoHistory = (context) => {
	const { state, setState } = context;
	const sortedHistory = youtubeManager.sortHistory(context);

	return (
		<div className="videoHistory_container">
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
						<Description { ...{ ...context, data: detail } }/>
					</div>
				</Link>)}
		</div>
	);
};

export default VideoHistory;
