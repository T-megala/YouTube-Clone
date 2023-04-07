/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { Checkbox } from '@mui/material';

const shorts = [
	{
		text: 'Like',
		icon: <Checkbox
			sx={ { color: 'black' } }
			icon={ <ThumbUpIcon/> }
			checkedIcon={ <ThumbUpIcon/> }
		      />,
	},
	{
		text: 'Dislike',
		icon: <Checkbox
			sx={ { color: 'black' } }
			icon={ <ThumbDownIcon/> }
			checkedIcon={ <ThumbDownIcon/> }
		      />,
	},
	{
		text: '5',
		icon: <CommentIcon/>,
	},
	{
		text: 'Share',
		icon: <ReplyIcon dir="rtl"/>,
	},
	{
		icon: <MoreHorizIcon/>,
	},
];

export default shorts;
