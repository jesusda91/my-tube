import { applicationConstants } from '../constants/application.constants';

const initialState = {
	videos: [],
	currentPage: 1,
	totalPages: 3,
	requestingVideos: false
}

const mapVideos = (videos, video, action) => {
	let thumbAction = action === "likes" ? "up" : "down";
	return videos.map(vid => {
		if (vid === video) {
			if (action === "likes" && vid.thumbAction === "down") {
				vid["dislikes"]--;
			}
			if (action === "dislikes" && vid.thumbAction === "up") {
				vid["likes"]--;
			}
			if (vid.thumbAction === thumbAction) {
				thumbAction = null;
				vid[action]--;
			} else {
				vid[action]++;
			}
			vid[action] = vid[action] < 0 ? 0 : vid[action];
			return { ...vid, thumbAction }
		}
		return vid;
	})
};

export const applicationReducer = (state = initialState, action) => {
	const { type, videos, error, video, currentPage } = action;
	const { videos: stateVideos } = state;
	switch (type) {
		case applicationConstants.GET_VIDEOS_REQUEST:
			return { ...state, requestingVideos: true };
		case applicationConstants.GET_VIDEOS_FAILURE:
			return { ...state, errorGetVideos: error, requestingVideos: false };
		case applicationConstants.GET_VIDEOS_SUCCESS:
			const newArray = stateVideos.concat(videos);
			return { ...state, videos: newArray, requestingVideos: false };
		case applicationConstants.LIKE_VIDEO:
			const newVideosWithLike = mapVideos(stateVideos, video, "likes");
			return { ...state, videos: newVideosWithLike };
		case applicationConstants.DISLIKE_VIDEO:
			const newVideosWithDislike = mapVideos(stateVideos, video, "dislikes");
			return { ...state, videos: newVideosWithDislike };
		case applicationConstants.SET_CURRENT_PAGE:
			return { ...state, currentPage };
		default:
			return state;
	}
}