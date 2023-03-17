/* eslint-disable max-lines-per-function */
import React from 'react';
import { Link } from 'react-router-dom';
import Channel from '../../../VideoCard/Channel';
import Thumbnail from '../../../VideoCard/Thumbnail';

const VideoHistory = (context) => {
	const { state: { history }} = context;

	return (
		<div className=" videoHistory">
			<div className="videoHistory_container">
				{history.map((detail, key) =>
					<Link
						key={ key }
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
		</div>);
};

export default VideoHistory;
