/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import VideoCardContainer from '../VideoCard/VideoCardContainer';

const FilterContent = (context) => {
	const { state: { filters }, state, setState } = context;
	const style = {
		backgroundColor: '#ededed',
		borderRadius: '10px ',
		marginLeft: '15px',
	};

	return (
		<div className="filterContent">
			<TabContext
				value={ filters }
			>
				<TabList
					variant="scrollable"
					scrollButtons="auto"
					indicatorColor="white"
					textColor="inherit"
					onChange={ (event, value) => setState({
						...state,
						filters: value,
					}) }
					sx={ {
						'color': 'black',
						' button:hover': { backgroundColor: '#d3d3d3' },
					} }
				>
					<Tab label="All"	value="All"sx={ style }/>
					<Tab label="computerProgramming" value="computerProgramming"	sx={ style }/>
					<Tab label="Music" value="Music" sx={ style }/>
					<Tab label="Lifestyle" value="Lifestyle" sx={ style }/>
					<Tab label="AI" value="AI" sx={ style }/>
					<Tab label="Gadgets" value="Gadgets"sx={ style }/>
					<Tab label="Podcasts" value="Podcasts" sx={ style }/>
					<Tab label="News" value="News" sx={ style }/>
					<Tab label="videoEditing" value="videoEditing" sx={ style }/>
					<Tab label="Sales" value="Sales" sx={ style }/>
					<Tab label="Cinema" value="Cinema"sx={ style }/>
					<Tab label="Anime" value="Anime" sx={ style }/>
				</TabList>
				<TabPanel value={ filters }>
					<VideoCardContainer { ...context }/>
				</TabPanel>
			</TabContext>
		</div>
	);
};

export default FilterContent;
