import React from 'react';
import shrinkSideBar from '../../Data/shrinkSideBar';

const ShrinkSideBar = () => <div className="shrinkSideBar">
	{
		shrinkSideBar.map((bar, i) =>
			<div key={ i } className="__shrinkSideBar">
				<div style={ { textAlign: 'center',
					marginTop: '18%' } }
				>{bar.icon}</div>
				<div style={ { fontSize: 'small',
					textAlign: 'center' } }
				>{bar.text}</div>
			</div>)
	}
</div>;

export default ShrinkSideBar;
