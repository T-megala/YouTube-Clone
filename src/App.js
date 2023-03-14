/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { React, useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Subscriptions from './components/SideBar/ExtendedSideBar/Subscriptions';
import Library from './components/SideBar/ExtendedSideBar/Library';
import History from './components/SideBar/ExtendedSideBar/History';
import Trending from './components/SideBar/ExtendedSideBar/Trending';
import Shopping from './components/SideBar/ExtendedSideBar/Shopping';
import Music from './components/SideBar/ExtendedSideBar/Music';
import Films from './components/SideBar/ExtendedSideBar/Films';
import Live from './components/SideBar/ExtendedSideBar/Live';
import Gaming from './components/SideBar/ExtendedSideBar/Gaming';
import News from './components/SideBar/ExtendedSideBar/News';
import Sport from './components/SideBar/ExtendedSideBar/Sport';
import Learning from './components/SideBar/ExtendedSideBar/Learning';
import FashionBeauty from './components/SideBar/ExtendedSideBar/FashionBeauty';
import BrowseChannels from './components/SideBar/ExtendedSideBar/BrowseChannels';
import Settings from './components/SideBar/ExtendedSideBar/Settings';
import ReportHistory from './components/SideBar/ExtendedSideBar/ReportHistory';
import Help from './components/SideBar/ExtendedSideBar/Help';
import SendFeedback from './components/SideBar/ExtendedSideBar/SendFeedback';
import Shorts from './components/SideBar/ExtendedSideBar/Shorts';

const initialState = {
	burgerMenu: true,
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <Home { ...extendedContext }/> }/>
					<Route path="/shorts" element={ <Shorts { ...extendedContext }/> }/>
					<Route path="/Subscriptions" element={ <Subscriptions { ...extendedContext }/> }/>
					<Route path="/Library" element={ <Library { ...extendedContext }/> }/>
					<Route path="/History" element={ <History { ...extendedContext }/> }/>
					<Route path="/Trending" element={ <Trending { ...extendedContext }/> }/>
					<Route path="/Shopping" element={ <Shopping { ...extendedContext }/> }/>
					<Route path="/Music" element={ <Music { ...extendedContext }/> }/>
					<Route path="/Films" element={ <Films { ...extendedContext }/> }/>
					<Route path="/Live" element={ <Live { ...extendedContext }/> }/>
					<Route path="/Gaming" element={ <Gaming { ...extendedContext }/> }/>
					<Route path="/News" element={ <News { ...extendedContext }/> }/>
					<Route path="/Sport" element={ <Sport { ...extendedContext }/> }/>
					<Route path="/Learning" element={ <Learning { ...extendedContext }/> }/>
					<Route path="/Fashion & beauty" element={ <FashionBeauty { ...extendedContext }/> }/>
					<Route path="/Browse channels" element={ <BrowseChannels { ...extendedContext }/> }/>
					<Route path="/Settings" element={ <Settings { ...extendedContext }/> }/>
					<Route path="/Report history" element={ <ReportHistory { ...extendedContext }/> }/>
					<Route path="/Help" element={ <Help { ...extendedContext }/> }/>
					<Route path="/Send feedback" element={ <SendFeedback { ...extendedContext }/> }/>
				</Routes>
			</BrowserRouter>
		</div>

	);
};

export default App;
