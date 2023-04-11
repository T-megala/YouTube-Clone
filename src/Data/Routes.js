/* eslint-disable max-len */
import Home from '../components/SideBar/ExtendedSideBar/Home';
import BrowseChannels from '../components/SideBar/ExtendedSideBar/BrowseChannels';
import FashionBeauty from '../components/SideBar/ExtendedSideBar/FashionBeauty';
import Gaming from '../components/SideBar/ExtendedSideBar/Gaming/Gaming';
import Help from '../components/SideBar/ExtendedSideBar/Help';
import History from '../components/SideBar/ExtendedSideBar/History/History';
import Learning from '../components/SideBar/ExtendedSideBar/Learning';
import Library from '../components/SideBar/ExtendedSideBar/Library';
import Music from '../components/SideBar/ExtendedSideBar/Music/Music';
import ReportHistory from '../components/SideBar/ExtendedSideBar/ReportHistory';
import Settings from '../components/SideBar/ExtendedSideBar/Settings';
import Shorts from '../components/SideBar/ExtendedSideBar/Shorts/Shorts';
import Sport from '../components/SideBar/ExtendedSideBar/Sport';
import Subscriptions from '../components/SideBar/ExtendedSideBar/Subscriptions';
import Video from '../components/VideoCard/Video/Video';

const RoutesData = [
	{
		path: '/',
		element: Home,
	},
	{
		path: '/shorts',
		element: Shorts,
	},
	{
		path: '/Subscriptions',
		element: Subscriptions,
	},
	{
		path: '/Library',
		element: Library,
	},
	{
		path: '/History',
		element: History,
	},
	{
		path: '/Music',
		element: Music,
	},
	{
		path: '/Gaming',
		element: Gaming,
	},
	{
		path: '/Sport',
		element: Sport,
	},
	{
		path: '/Learning',
		element: Learning,
	},
	{
		path: '/Fashion & beauty',
		element: FashionBeauty,
	},
	{
		path: '/Browse channels',
		element: BrowseChannels,
	},
	{
		path: '/Settings',
		element: Settings,
	},
	{
		path: '/Report history',
		element: ReportHistory,
	},
	{
		path: '/Help',
		element: Help,
	},
	{
		path: '/video123',
		element: Video,
	},
	{
		path: '/video234',
		element: Video,
	},
	{
		path: '/video345',
		element: Video,
	},
	{
		path: '/video456',
		element: Video,
	},
	{
		path: '/video567',
		element: Video,
	},
	{
		path: '/video678',
		element: Video,
	},
	{
		path: '/video789',
		element: Video,
	},
	{
		path: '/video910',
		element: Video,
	},
	{
		path: '/video101',
		element: Video,
	},

];

export default RoutesData;
