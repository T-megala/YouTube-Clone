import Home from '../components/SideBar/ExtendedSideBar/Home';
import BrowseChannels from
	'../components/SideBar/ExtendedSideBar/BrowseChannels';
import FashionBeauty from '../components/SideBar/ExtendedSideBar/FashionBeauty';
import Films from '../components/SideBar/ExtendedSideBar/Films';
import Gaming from '../components/SideBar/ExtendedSideBar/Gaming';
import Help from '../components/SideBar/ExtendedSideBar/Help';
import History from '../components/SideBar/ExtendedSideBar/History';
import Learning from '../components/SideBar/ExtendedSideBar/Learning';
import Library from '../components/SideBar/ExtendedSideBar/Library';
import Live from '../components/SideBar/ExtendedSideBar/Live';
import Music from '../components/SideBar/ExtendedSideBar/Music';
import News from '../components/SideBar/ExtendedSideBar/News';
import ReportHistory from '../components/SideBar/ExtendedSideBar/ReportHistory';
import SendFeedback from '../components/SideBar/ExtendedSideBar/SendFeedback';
import Settings from '../components/SideBar/ExtendedSideBar/Settings';
import Shopping from '../components/SideBar/ExtendedSideBar/Shopping';
import Shorts from '../components/SideBar/ExtendedSideBar/Shorts';
import Sport from '../components/SideBar/ExtendedSideBar/Sport';
import Subscriptions from '../components/SideBar/ExtendedSideBar/Subscriptions';
import Trending from '../components/SideBar/ExtendedSideBar/Trending';
import Video from '../components/VideoCard/Video';

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
		path: '/Trending',
		element: Trending,
	},
	{
		path: '/Shopping',
		element: Shopping,
	},
	{
		path: '/Music',
		element: Music,
	},
	{
		path: '/Films',
		element: Films,
	},
	{
		path: '/Live',
		element: Live,
	},
	{
		path: '/Gaming',
		element: Gaming,
	},
	{
		path: '/News',
		element: News,
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
		path: '/Send feedback',
		element: SendFeedback,
	},
	{ path: '/video123',
		element: Video },

];

export default RoutesData;
