/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import NavBar from '../../NavBar/NavBar';
import SideBar from '../SideBar';

const ReportHistory = (context) =>
	<div>
		<NavBar { ...context }/>
		<div className="container">
			<SideBar { ...context }/>
			<div className="reportLeft">
				<div className="reportHeader"><h4>Thanks for reporting</h4></div>
				<div className="reportContent">Any member of the YouTube community can flag content to us that they believe violates our Community Guidelines. When
					something is flagged, it's not automatically taken down. Flagged content is reviewed in line with the following guidelines:</div>
				<li> <span>Content that violates our <a href="https://www.youtube.com/intl/en-GB/howyoutubeworks/policies/community-guidelines/">Community Guidelines</a>  is removed from YouTube.</span></li>
				<li><span>Content that may not be appropriate for all younger audiences may be age-restricted.</span></li>
				<li><span>Reports filed for content that has been deleted by the creator cannot be shown.</span></li>

			</div>
			<div className="reportRight">
				<img
					alt="reportImage"
					src="/image/ReportHistory.png"
					height="150px"
				/></div>
		</div>
	</div>;

export default ReportHistory;
