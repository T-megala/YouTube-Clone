/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import SignIn from '../../NavBar/SignIn';

const LibraryBody = () =>
	<div className="libraryBody">
		<MdOutlineVideoLibrary size={ 150 }/>
		<div className="firstLine">Enjoy your favourite videos</div>
		<div className="secondLine">Sign in to access videos that you've liked or saved</div>
		<SignIn/>
	</div>;

export default LibraryBody;
