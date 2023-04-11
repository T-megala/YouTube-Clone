import React from 'react';
import sideBar from '../../../Data/sideBar';
import SideBarLink from '../SideBarLink';

const ExtendedSideBar = (context) =>
	<div className="sideBar">
		{
			sideBar.map((category, i) =>
				<SideBarLink key={ i } { ...{ category, context } }/>)
		}
	</div>;

export default ExtendedSideBar;
