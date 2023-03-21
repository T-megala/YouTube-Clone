/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import VideoCard from '../VideoCard/VideoCard';

const FilterContent = (context) => {
	const { state: { filters }, state, setState } = context;

	return (
		<div className="filterContent">
			<TabContext value={ filters }	variant="scrollable">
				<TabList
					sx={ {
						marginLeft: '5px',
						backgroundColor: '#ededed',
						borderRadius: '15px ',
					} }
					onChange={ (event, value) => setState({
						...state,
						filters: value,
					}) }
				>
					<Tab label="All" value="All"/>
					<Tab label="computerProgramming" value="computerProgramming"/>
					<Tab label="Music" value="Music"/>
					<Tab label="Lifestyle" value="Lifestyle"/>
				</TabList>
				<TabPanel>
					<VideoCard { ...context }/>
				</TabPanel>
			</TabContext>
		</div>
	);
};

export default FilterContent;
