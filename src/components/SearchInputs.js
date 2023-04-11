/* eslint-disable max-lines-per-function */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import Channel from './VideoCard/Channel';
import Thumbnail from './VideoCard/Thumbnail';

const SearchInputs = (context) => {
	const { config: { cardDetails }, state,
		setState, state: { history }} = context;

	const { id = '' } = useParams();

	const filteredVideo = cardDetails
		.filter((cardDetail) =>
			cardDetail.category.toLowerCase() === id.toLowerCase());

	return <div className="container">
		<SideBar { ...context }/>
		<div className="videoHistory_container">
			{filteredVideo.map((detail, key) =>
				<Link
					key={ key }
					onClick={ () => setState({
						...state,
						selectedId: `${ detail.video }`,
						history: [...history, detail],
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
	</div>;
};

export default SearchInputs;
