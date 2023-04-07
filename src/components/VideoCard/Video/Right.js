/* eslint-disable max-lines-per-function */
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ReplyIcon from '@mui/icons-material/Reply';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Button, Checkbox } from '@mui/material';

const Right = () =>
	<div 	style={ { flex: 1,
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between' } }
	>
		<div
			className="searchButton"
			style={ {
				borderRadius: ' 50px 0 0 50px ',
				height: '38px',
			} }
		>
			<Checkbox
				sx={ { color: 'black', width: '64px' } }
				icon={ <ThumbUpOutlinedIcon/> }
				checkedIcon={
					<ThumbUpIcon/>
				}
			/>

		</div>
		<div
			className="searchButton"
			style={ {
				height: '38px',
			} }
		>
			<Checkbox
				sx={ { color: 'black', width: '35px' } }
				icon={ <ThumbDownOutlinedIcon/> }
				checkedIcon={
					<ThumbDownIcon/>
				}
			/>
		</div>
		<Button
			variant="contained"
			sx={ {
				borderRadius: '20px',
				backgroundColor: '#d3d3d3',
				color: 'black',
			} }
			startIcon={ <ReplyIcon/> }
		>Share</Button>
		<Button
			sx={ {
				borderRadius: '20px',
				backgroundColor: '#d3d3d3',
				color: 'black',
			} }
			startIcon={ <ArrowDownwardIcon/> }
		>Download</Button>
		<MoreHorizIcon/>
	</div>;

export default Right;
