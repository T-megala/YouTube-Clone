/* eslint-disable max-lines-per-function */
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const Options = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return <div className="videoOptions">
		<Button
			id="more-button"
			onClick={ handleClick }
			aria-controls={ open ? 'more-options' : undefined }
			arias-haspopup="true"
			aria-expanded={ open ? 'true' : undefined }
		>more

			<Menu
				id="more-options"
				anchorEl={ anchorEl }
				open={ open }
				MenuListProps={ {
					'aria-labelledby': 'more-button',
				} }
				onClose={ handleClose }
			>
				<MenuItem> Watch Later</MenuItem>
				<MenuItem>Add to Playlist</MenuItem>
				<MenuItem>Download</MenuItem>
				<MenuItem>Share</MenuItem>
			</Menu>
		</Button>
	</div>;
};

export default Options;
