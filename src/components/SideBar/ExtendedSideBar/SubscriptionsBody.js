/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { RiVideoLine } from 'react-icons/ri';
import SignIn from '../../NavBar/SignIn';

const SubscriptionsBody = () =>
	<div className="subscriptionsBody">
		<RiVideoLine size={ 150 }/>
		<div className="firstLine">Don't miss new videos</div>
		<div className="secondLine">Sign in to see updates from your favourite YouTube channels</div>
		<SignIn/>
	</div>;

export default SubscriptionsBody;
