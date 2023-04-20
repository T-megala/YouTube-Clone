/* eslint-disable max-lines */
/* eslint-disable max-len */

import bestOfYt from '../Data/bestOfYt';
import beautyAndFashion from '../Data/beautyAndFashion';
import comedy from '../Data/comedy';
import cookingAndHealth from '../Data/cookingAndHealth';
import filmAndEnt from '../Data/filmAndEnt';
import gaming from '../Data/gaming';
import music from '../Data/music';
import sports from '../Data/sports';
import tech from '../Data/tech';
import fashionData from '../Data/carouselData/fashionData';
import gamingData from '../Data/carouselData/gamingData';
import learningData from '../Data/carouselData/learningData';
import musicData from '../Data/carouselData/musicData';
import sportsData from '../Data/carouselData/sportsData';
import Input from '../Data/Input';

const config = {

	cardDetails: Input,
	categories: [
		'All',
		'Gaming',
		'computerProgramming',
		'Music',
		'AI',
		'Gadgets',
		'Podcasts',
		'News',
		'videoEditing',
		'Sales',
		'Cinema',
		'Anime',
		'Lifestyle',
	],

	videoMenu: [
		'Add to Queue',
		'Save to Watch later',
		'save to playlist',
		'Download',
		'Share',
	],

	browseCategories: [
		{
			title: 'Best of Youtube',
			collections: bestOfYt,
		},
		{
			title: 'Beauty and Fashion',
			collections: beautyAndFashion,
		},
		{
			title: 'Comedy',
			collections: comedy,
		},
		{
			title: 'Sports',
			collections: sports,
		},
		{
			title: 'Music',
			collections: music,
		},
		{
			title: 'Tech',
			collections: tech,
		},
		{
			title: 'Gaming',
			collections: gaming,
		},
		{
			title: 'Cooking and Health',
			collections: cookingAndHealth,
		},
		{
			title: 'Film and Entertainment',
			collections: filmAndEnt,
		},
	],

	banner: [
		{
			title: 'Beauty and Fashion',
			collections: fashionData,
		},
		{
			title: 'Sports',
			collections: sportsData,
		},
		{
			title: 'Music',
			collections: musicData,
		},
		{
			title: 'Gaming',
			collections: gamingData,
		},
		{
			title: 'Learning',
			collections: learningData,
		},
	],

	sportsBanner: [
		{
			category: 'Cricket',
			video: 'https://player.vimeo.com/progressive_redirect/playback/697522827/rendition/360p?loc=external&oauth2_token_id=57447761&signature=e4e683ae48ddce0b8972c6cf0df55dc24d97ef033bc8860d389356fc20e443ec',
			subscribers: '249K subscribers',
			text: 'Greatest Cricket Match',
			channel: 'ICC',
			views: '1.5M views ',
			date: '2 days ago',
		},
		{
			category: 'Arsenal',
			video: 'https://player.vimeo.com/external/347925811.sd.mp4?s=e48915e5abacccf4471e3daf61611fd8af52ca87&profile_id=164&oauth2_token_id=57447761',
			subscribers: '485K subscribers',
			text: ' Soccer Practice Match',
			channel: 'Arsenanl FC',
			views: '15M views ',
			date: '2 weeks ago',
		},
		{
			category: 'Man city',
			video: 'https://player.vimeo.com/external/359969763.sd.mp4?s=47a8fcaa68d8eecf5698e944dfbb94418ba631aa&profile_id=164&oauth2_token_id=57447761',
			subscribers: '14M subscribers',
			text: ' Soccer Match Drone Shot',
			channel: 'Manchester FC',
			views: '215M views ',
			date: '2 months ago',
		},
	],

	gamingBanner: [
		{
			category: 'Cricket',
			video: 'https://player.vimeo.com/progressive_redirect/playback/697522827/rendition/360p?loc=external&oauth2_token_id=57447761&signature=e4e683ae48ddce0b8972c6cf0df55dc24d97ef033bc8860d389356fc20e443ec',
			subscribers: '249K subscribers',
			text: 'Greatest Cricket Match',
		},
		{
			category: 'Arsenal',
			video: 'https://player.vimeo.com/external/347925811.sd.mp4?s=e48915e5abacccf4471e3daf61611fd8af52ca87&profile_id=164&oauth2_token_id=57447761',
			subscribers: '485K subscribers',
			text: ' Soccer Practice Match',
		},
		{
			category: 'Man city',
			video: 'https://player.vimeo.com/external/359969763.sd.mp4?s=47a8fcaa68d8eecf5698e944dfbb94418ba631aa&profile_id=164&oauth2_token_id=57447761',
			subscribers: '14M subscribers',
			text: ' Soccer Match Drone Shot',
		},
	],

	musicBanner: [
		{
			category: 'PS',
			video: 'https://player.vimeo.com/external/335640655.sd.mp4?s=de7c801e6f0833eb7dbbc73602f2aaf2a040f2b7&profile_id=164&oauth2_token_id=57447761',
			subscribers: '249K subscribers',
			text: 'Composing Music with Piano',
		},
		{
			category: 'Sony',
			video: 'https://player.vimeo.com/external/306390278.sd.mp4?s=9517caec783132f6f0fb3078b495a398ec4e886b&profile_id=164&oauth2_token_id=57447761',
			subscribers: '485K subscribers',
			text: 'Party Night Playlist',
		},
		{
			category: 'Ariana',
			video: 'https://player.vimeo.com/external/371855028.sd.mp4?s=91381db6457e4abe849285127a4188fb5cc481db&profile_id=164&oauth2_token_id=57447761',
			subscribers: '14M subscribers',
			text: 'DJ night :)',
		},
	],

	learningBanner: [
		{
			category: 'PS',
			video: 'https://player.vimeo.com/external/372311827.sd.mp4?s=7b58adfb4a8609401a1466e3b33946f8b49ae705&profile_id=164&oauth2_token_id=57447761',
			subscribers: '249K subscribers',
			text: 'Group Study',
		},
		{
			category: 'Sony',
			video: 'https://player.vimeo.com/external/290031869.sd.mp4?s=3ee4ac1faf2714d2741306e1c47b8d81a3596bc3&profile_id=164&oauth2_token_id=57447761',
			subscribers: '485K subscribers',
			text: 'Presentation Day at university',
		},
		{
			category: 'Ariana',
			video: 'https://player.vimeo.com/external/428447173.sd.mp4?s=f44d0dabaf0707a9aa199a711d1c977c04571365&profile_id=164&oauth2_token_id=57447761',
			subscribers: '14M subscribers',
			text: 'Group Discussion',
		},
	],

	fashionBanner: [
		{
			category: 'PS',
			video: 'https://player.vimeo.com/external/174003295.sd.mp4?s=bbf98342ffa62a93e66be030a17df61c01e9c8af&profile_id=164&oauth2_token_id=57447761',
			subscribers: '249K subscribers',
			text: 'Designer wear giveaway',
		},
		{
			category: 'Sony',
			video: 'https://player.vimeo.com/external/274645324.sd.mp4?s=75fb119219002bc092e045853b62209ace9ef282&profile_id=164&oauth2_token_id=57447761',
			subscribers: '485K subscribers',
			text: 'Photoshoot day',
		},
		{
			category: 'Ariana',
			video: 'https://player.vimeo.com/external/372192428.sd.mp4?s=3082abbe74824763f7d79f2a65ac4225f2689828&profile_id=164&oauth2_token_id=57447761',
			subscribers: '14M subscribers',
			text: 'Modelling ',
		},
	],
};

export default config;
