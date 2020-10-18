import { applicationConstants } from '../constants/application.constants';

const initialState = {
	videos: [],
	currentPage: 1,
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
	const { type, videos, error, video } = action;
	const { videos: stateVideos } = state;
	switch (type) {
		case applicationConstants.GET_VIDEOS_REQUEST:
			return { ...state };
		case applicationConstants.GET_VIDEOS_FAILURE:
			return { ...state, errorGetVideos: error };
		case applicationConstants.GET_VIDEOS_SUCCESS:
			return { ...state, videos };
		case applicationConstants.LIKE_VIDEO:
			const newVideosWithLike = mapVideos(stateVideos, video, "likes");
			return { ...state, videos: newVideosWithLike };
		case applicationConstants.DISLIKE_VIDEO:
			const newVideosWithDislike = mapVideos(stateVideos, video, "dislikes");
			return { ...state, videos: newVideosWithDislike };
		default:
			return state;
	}
}