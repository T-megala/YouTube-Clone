/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { Avatar, Button } from '@mui/material';
import React from 'react';

const CarouselDetails = () =>
	<div className="carouselDetails">
		<div className="carouselDetailsLeft">
			<Avatar
				alt="img"
				src="https://yt3.googleusercontent.com/vCqmJ7cdUYpvR0bqLpWIe8ktaor4QafQLlfQyTuZy-M9W_YafT8Wo9kdsKL2St1BrkMRpVSJgA=s176-c-k-c0x00ffffff-no-rj-mo"
				sx={ { width: 100, height: 100 } }
			/>
			<div className="carouselChannelDetail">
				<h1 style={ { margin: 0 } }>music</h1>
				<span>93.5hhh</span>
			</div>
		</div>
		<div className="carouselSubscribeButton">
			<Button
				variant="contained"
				sx={ {
					borderRadius: '20px',
					backgroundColor: 'black',
				} }
			>subscribe</Button>
		</div>
	</div>
	;

export default CarouselDetails;
