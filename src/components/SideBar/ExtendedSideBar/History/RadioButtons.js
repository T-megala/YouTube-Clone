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
			<div className="line"/>
			<RadioGroup
				defaultValue="Watch history"
			>
				<FormControlLabel
					label="Watch history"
					value="Watch history"
					control={ <Radio/> }
				/>
				<div className="line"/>
				<FormControlLabel
					value="Community"
					control={ <Radio/> }
					label="Community"
				/>
				<div className="line"/>
			</RadioGroup>
		</FormControl>
	</div>;

export default RadioButtons;
