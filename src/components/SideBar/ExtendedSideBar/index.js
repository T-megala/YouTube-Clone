import React from 'react';
import sideBar from '../../../Data/sideBar';
import SideBarLink from '../SideBarLink';

const ExtendedSideBar = () =>
	<div className="sideBar">
		{
			sideBar.map((category, i) =>
				<SideBarLink key={ i } { ...{ category } }/>)
		}
	</div>;

export default ExtendedSideBar;
