import React from 'react';
import ReplyIcon from '@mui/icons-material/Reply';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const shorts = [
	{
		text: 'Like',
		icon: <ThumbUpIcon/>,
	},
	{
		text: 'Dislike',
		icon: <ThumbDownIcon/>,
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
		text: 'more',
		icon: <MoreHorizIcon/>,
	},
];

export default shorts;
