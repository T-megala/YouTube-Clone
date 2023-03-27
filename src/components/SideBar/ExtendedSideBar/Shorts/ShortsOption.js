import React from 'react';
import shorts from '../../../../Data/shorts';

const ShortsOption = () =>
	<div className="shorts_option">
		{
			shorts.map((short, i) =>
				<div
					key={ i }
					className="shrinkSideBar"
					style={ { lineHeight: '25px' } }
				>
					<span>{short.text}</span>
					<span>{short.icon}</span>
				</div>)
		}
	</div>;

export default ShortsOption;
