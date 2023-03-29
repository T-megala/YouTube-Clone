/* eslint-disable max-lines-per-function */
import {
	FormControl, FormControlLabel,
	FormLabel, Radio, RadioGroup,
} from '@mui/material';
import React from 'react';

const RadioButtons = () =>
	<div className="radioButtons">
		<FormControl>
			<FormLabel
				sx={ { color: 'grey' } }
			>History type</FormLabel>
			<hr
				style={ {
					width: '25em',
				} }
			/>
			<RadioGroup
				defaultValue="Watch history"
			>
				<FormControlLabel
					label="Watch history"
					value="Watch history"
					control={ <Radio/> }
				/>
				<hr
					style={ {
						width: '99%',
					} }
				/>
				<FormControlLabel
					value="Community"
					control={ <Radio/> }
					label="Community"
				/>
				<hr
					style={ {
						width: '99%',
					} }
				/>
			</RadioGroup>
		</FormControl>
	</div>;

export default RadioButtons;
