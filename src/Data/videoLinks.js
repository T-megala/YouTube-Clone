/* eslint-disable max-len */

const videoLinks = {
	v1: 'https://player.vimeo.com/external/364962549.sd.mp4?s=0e2ae12a501d9de68506d354e703d955054ebb5a&profile_id=164&oauth2_token_id=57447761',
	v2: 'https://player.vimeo.com/external/338064905.sd.mp4?s=468058f956610f28d7d8cab7fbc5890b004a9481&profile_id=164&oauth2_token_id=57447761',
	v3: 'https://player.vimeo.com/external/415290297.sd.mp4?s=b45665e349e12f5e568b9c94c35b10e6194a6101&profile_id=164&oauth2_token_id=57447761',
	v4: 'https://player.vimeo.com/external/357941044.sd.mp4?s=4b58cdf2377615be10826c0e4f722c1990d8ac44&profile_id=164&oauth2_token_id=57447761',
	v5: 'https://player.vimeo.com/external/262753961.sd.mp4?s=3b5f51dbebd01853c137aedbf657a1f01b7c927e&profile_id=164&oauth2_token_id=57447761',
	v6: 'https://player.vimeo.com/external/367491426.sd.mp4?s=e46d44c9334d54aed123616ad3f612f8e51263ba&profile_id=164&oauth2_token_id=57447761',
	v7: 'https://player.vimeo.com/external/376926499.sd.mp4?s=395affe322b7a9863fb57ef61fc039f9409aa3d3&profile_id=164&oauth2_token_id=57447761',
	v8: 'https://player.vimeo.com/external/357563488.sd.mp4?s=b1cfbc7c4eb11d8a10dc5dfe36ed63466cb3da61&profile_id=164&oauth2_token_id=57447761',
	v9: 'https://player.vimeo.com/external/312895181.sd.mp4?s=2d29fcdbc7b110e80d0cf3c8bee7a75843bb9625&profile_id=164&oauth2_token_id=57447761',

	gaming1: 'https://player.vimeo.com/external/414190381.sd.mp4?s=52097da981630ac8f44913d998cc11594e4897fe&profile_id=164&oauth2_token_id=57447761',
	gaming2: 'https://player.vimeo.com/external/500626188.sd.mp4?s=9f5ce433752b98aac4863c05469bc9f99da026bb&profile_id=164&oauth2_token_id=57447761',
	gaming3: 'https://player.vimeo.com/external/507414838.sd.mp4?s=a6e815966a7fb4ec14dd0d6a21dc12696dd834b3&profile_id=164&oauth2_token_id=57447761',
	gaming4: 'https://player.vimeo.com/external/557968261.sd.mp4?s=6ea723777c4d048c408148e5c34513380cbb1617&profile_id=164&oauth2_token_id=57447761',
	gaming5: 'https://player.vimeo.com/external/544914207.sd.mp4?s=196b2ece5d4c8f0d8d45dbdf8ca7a53694c8a606&profile_id=164&oauth2_token_id=57447761',
	gaming6: 'https://player.vimeo.com/external/549791147.sd.mp4?s=28ef8753ca30b64f50308709fd608a0d386aa3a8&profile_id=164&oauth2_token_id=57447761',

	AI: 'https://player.vimeo.com/external/477811919.sd.mp4?s=ea012a733615a418209d3b3231983a07b2c795de&profile_id=164&oauth2_token_id=57447761',
	AI1: 'https://player.vimeo.com/external/562638295.sd.mp4?s=ed5f30580cfde44ecee638581446f5e61c2690eb&profile_id=164&oauth2_token_id=57447761',
	AI2: 'https://player.vimeo.com/external/555670355.sd.mp4?s=b84e9c9683419b3355575059e67e185f1f3ef927&profile_id=164&oauth2_token_id=57447761',
	AI3: 'https://player.vimeo.com/external/555603635.sd.mp4?s=81c865cfce3a7c7d07f011d48868b3984fced52b&profile_id=164&oauth2_token_id=57447761',
	AI4: 'https://player.vimeo.com/external/562641568.sd.mp4?s=e643706a23ea98c19a8f3e9080084ee337098398&profile_id=164&oauth2_token_id=57447761',
	AI5: 'https://player.vimeo.com/external/569753275.sd.mp4?s=cd340619f4ccaca7b3ba03111be4c99e79024e11&profile_id=164&oauth2_token_id=57447761',

	Gadgets: 'https://player.vimeo.com/external/373843961.sd.mp4?s=c0823b5effd538784f76c2839e89a45a421b8e1b&profile_id=164&oauth2_token_id=57447761',
	Gadgets1: 'https://player.vimeo.com/external/371837723.sd.mp4?s=7a4920e3315f22617298c9f072d1f11f03843be2&profile_id=164&oauth2_token_id=57447761',
	Gadgets2: 'https://player.vimeo.com/external/372334720.sd.mp4?s=3b94e2d48b5844adcda82889e4809589de5d9172&profile_id=164&oauth2_token_id=57447761',
	Gadgets3: 'https://player.vimeo.com/external/373873659.sd.mp4?s=12c7a2096873b311c1a91091cd645a5387b32a90&profile_id=164&oauth2_token_id=57447761',
	Gadgets4: 'https://player.vimeo.com/external/393619193.sd.mp4?s=4eac308383a380b68e91ce948f2fbb523ad96ba7&profile_id=164&oauth2_token_id=57447761',
	Gadgets5: 'https://player.vimeo.com/external/374096276.sd.mp4?s=265e3e8ca2a0caef851d5e20d4158cbc3b9028b3&profile_id=164&oauth2_token_id=57447761',

	Podcast: 'https://player.vimeo.com/external/425032892.sd.mp4?s=6310972d535c8877ef7e81edc92daaf9e7fe3cb1&profile_id=164&oauth2_token_id=57447761',
	Podcast1: 'https://player.vimeo.com/external/514577229.sd.mp4?s=8c8e6e4f18eed00fccab6a57dc59dc2e9b09a4ce&profile_id=164&oauth2_token_id=57447761',
	Podcast2: 'https://player.vimeo.com/external/440030962.sd.mp4?s=caa14fedf51975ad280fc160c155acee116d8f19&profile_id=164&oauth2_token_id=57447761',
	Podcast3: 'https://player.vimeo.com/external/514576623.sd.mp4?s=f112d28c491a6e492259f96b34ff26c13a519a4a&profile_id=164&oauth2_token_id=57447761',
	Podcast4: 'https://player.vimeo.com/external/514307658.sd.mp4?s=c8fa18a5a3705e7a578d45c9ab1cd9dbea9bd5f9&profile_id=164&oauth2_token_id=57447761',
	Podcast5: 'https://player.vimeo.com/external/440031311.sd.mp4?s=bfd59318b32981bf2df2472fc887fafd02f3cc8f&profile_id=164&oauth2_token_id=57447761',

	News: 'https://player.vimeo.com/external/381050478.sd.mp4?s=4e0635302c3cb66cb2daa1deca79b4c771ac316f&profile_id=164&oauth2_token_id=57447761',
	News1: 'https://player.vimeo.com/external/194096190.sd.mp4?s=dee63d78883ffd1721877e6e7e51c185ca8f5d85&profile_id=164&oauth2_token_id=57447761',
	News2: 'https://player.vimeo.com/external/397995666.sd.mp4?s=d330d2694ca4a7fb02b4978ee05804dda9c87332&profile_id=164&oauth2_token_id=57447761',
	News3: 'https://player.vimeo.com/external/469849519.sd.mp4?s=3a3131e985da6d1d6d2cdc1915b4d1a1aab43f24&profile_id=164&oauth2_token_id=57447761',
	News4: 'https://player.vimeo.com/external/653684213.sd.mp4?s=c0b9487806e29c2549280dc627e03171d3e1ba20&profile_id=164&oauth_token_id=57447761',
	News5: 'https://player.vimeo.com/external/397995666.sd.mp4?s=d330d2694ca4a7fb02b4978ee05804dda9c87332&profile_id=164&oauth2_token_id=57447761',

	videoEditing: 'https://player.vimeo.com/external/297888097.sd.mp4?s=03dd8f3554e65f220699d2cdf55a3b1020d66b28&profile_id=164&oauth2_token_id=57447761',
	videoEditing1: 'https://player.vimeo.com/external/297888102.sd.mp4?s=b9b76b12df9767bcc48ab7e33c3c9c5a5f38a269&profile_id=164&oauth2_token_id=57447761',
	videoEditing2: 'https://player.vimeo.com/external/357646800.sd.mp4?s=e3e66dd3ca57f56c49a2c37712634d827f516235&profile_id=164&oauth2_token_id=57447761',
	videoEditing3: 'https://player.vimeo.com/external/332871723.sd.mp4?s=b5508f4bb0d446e1a25cb53a3364be565b657237&profile_id=164&oauth2_token_id=57447761',
	videoEditing4: 'https://player.vimeo.com/external/542276664.sd.mp4?s=17f6d78b344058c551dcf398029756386cb14697&profile_id=164&oauth2_token_id=57447761',
	videoEditing5: 'https://player.vimeo.com/external/556160046.sd.mp4?s=bbb0f7e8a35b67ca938b7b12d7cc00971eb09558&profile_id=164&oauth2_token_id=57447761',

	Sales: 'https://player.vimeo.com/external/210754477.sd.mp4?s=562351b08dc219eb3dd7cd60210d87160f1ce8c9&profile_id=164&oauth2_token_id=57447761',
	Sales1: 'https://player.vimeo.com/external/414213446.sd.mp4?s=2e89cd5f4d0e09a09ae56a8eb355879151e13164&profile_id=164&oauth2_token_id=57447761',
	Sales2: 'https://player.vimeo.com/external/371621171.sd.mp4?s=79545ff8835132ebe6e8c13a0b0588902adebf33&profile_id=164&oauth2_token_id=57447761',
	Sales3: 'https://player.vimeo.com/external/494468024.sd.mp4?s=50ae1e2be0b93fa7e2fbafebbbb149511f58c469&profile_id=164&oauth2_token_id=57447761',
	Sales4: 'https://player.vimeo.com/external/552121494.sd.mp4?s=d19e5f1b4ecb85cf59c54ef40a23f39caa89ed6b&profile_id=164&oauth2_token_id=57447761',
	Sales5: 'https://player.vimeo.com/external/479470236.sd.mp4?s=9634b7d546f13a2ed0ae8e9cf83fdf3c64ff2170&profile_id=165&oauth2_token_id=57447761',

	Cinema: 'https://player.vimeo.com/external/369019705.sd.mp4?s=5be8ca9ff8c6d809a40af1a6c84828528ff596ed&profile_id=164&oauth2_token_id=57447761',
	Cinema1: 'https://player.vimeo.com/external/398016733.sd.mp4?s=7f4d8dd53fe773d70c9c0510b21c05a125d7aaef&profile_id=164&oauth2_token_id=57447761',
	Cinema2: 'https://player.vimeo.com/external/553300002.sd.mp4?s=9d63ee079d4aa3f36c91df1d43a78c3aae276ba6&profile_id=164&oauth2_token_id=57447761',
	Cinema3: 'https://player.vimeo.com/external/560476289.sd.mp4?s=4c84043e02a10c33b546c893a1cb754e3290dcea&profile_id=164&oauth2_token_id=57447761',
	Cinema4: 'https://player.vimeo.com/external/560454507.sd.mp4?s=57d44e68747c0b732ecda002e19e32ed9a1c1581&profile_id=164&oauth2_token_id=57447761',
	Cinema5: 'https://player.vimeo.com/external/438911598.sd.mp4?s=d234b9656a7a93a41052c1829fdb9fc2a8d9185d&profile_id=164&oauth2_token_id=57447761',

	Anime: 'https://player.vimeo.com/external/311236486.sd.mp4?s=bb1fa26011a5ba893cbfe8bc38fdf91af820c4b5&profile_id=164&oauth2_token_id=57447761',
	Anime1: 'https://player.vimeo.com/external/224889044.sd.mp4?s=592944e98c732eb867d56e9b4940d9ed78bbe0ea&profile_id=164&oauth2_token_id=57447761',
	Anime2: 'https://player.vimeo.com/external/344312082.sd.mp4?s=428beea7a3270921f6aad63dbad2cb7bdb4f422d&profile_id=164&oauth2_token_id=57447761',
	Anime3: 'https://player.vimeo.com/external/545507162.sd.mp4?s=6171ff020be11c33f2e9ea6e97d2ea4a110c55fc&profile_id=164&oauth2_token_id=57447761',
	Anime4: 'https://player.vimeo.com/external/447263138.sd.mp4?s=fbcabd53f0873dca86813d8f95cf193a02dcaab9&profile_id=164&oauth2_token_id=57447761',
	Anime5: 'https://player.vimeo.com/external/440307399.sd.mp4?s=548bf83d2fb20b494e8331c3376ef083031ccd6d&profile_id=164&oauth2_token_id=57447761',

};

export default videoLinks;
