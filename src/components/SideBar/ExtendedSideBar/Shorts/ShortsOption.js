import React from 'react';
import shorts from '../../../../Data/shorts';

const ShortsOption = () =>
	<div className="shortsOptions">
		{
			shorts.map((short, i) =>
				<div
					key={ i }
					style={ {	display: 'flex',
						flexDirection: 'column',
						lineHeight: '25px',
						width: '53px' } }
					className="shortsOption"
				>
					<span style={ { marginLeft: '10px' } }>{short.icon}</span>
					<span>{short.text}</span>
				</div>)
		}
	</div>;

export default ShortsOption;
