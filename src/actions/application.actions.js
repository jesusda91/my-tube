import { applicationConstants } from "../constants/application.constants";
import { getVideosService } from "../services/Video";

export const getVideos = (page) => {
	console.log("getVideos");

	const getVideosRequest = () => ({ type: applicationConstants.GET_VIDEOS_REQUEST });
	const getVideosSuccess = videos => ({ type: applicationConstants.GET_VIDEOS_SUCCESS, videos });
	const getVideosFailure = error => ({ type: applicationConstants.GET_VIDEOS_FAILURE, error });;

	return dispatch => {
		dispatch(getVideosRequest());
		getVideosService(page).then(videos => {
			dispatch(getVideosSuccess(videos));
		}).catch(error => {
			console.log("ERR", error);
			dispatch(getVideosFailure(error));
		});
	}
}

export const likeVideo = video => ({ type: applicationConstants.LIKE_VIDEO, video });

export const dislikeVideo = video => ({ type: applicationConstants.DISLIKE_VIDEO, video });

export const increasePage = () => {
	return (dispatch, getState) => {
		const { currentPage } = getState().applicationReducer;
		dispatch({ type: applicationConstants.SET_CURRENT_PAGE, currentPage: currentPage + 1 });
	}
}