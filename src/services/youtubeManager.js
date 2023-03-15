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

const youtubeManager = {
	filter,
};

export default youtubeManager;
