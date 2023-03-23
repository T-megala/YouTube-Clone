/* eslint-disable max-len */

const filter = {
	All: ({ config: { cardDetails }}) => cardDetails,
	videoEditing: ({ config: { cardDetails }, state: { filters }}) =>
		cardDetails.filter((data) => data.category === filters),
	Music: ({ config: { cardDetails }, state: { filters }}) => cardDetails.filter((data) =>
		data.category === filters),
	Lifestyle: ({ config: { cardDetails }, state: { filters }}) => cardDetails.filter((data) =>
		data.category === filters),
	computerProgramming: ({ config: { cardDetails }, state: { filters }}) => cardDetails.filter((data) =>
		data.category === filters),
};

const sortHistory = ({ state: { history }}) => history.sort((a, b) => b.date - a.date);

const youtubeManager = {
	filter,
	sortHistory,
};

export default youtubeManager;
