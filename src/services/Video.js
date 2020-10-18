import { urlGetVideoDetail, urlGetVideos } from './../constants/urls';
import { handleResponse } from './../helpers/common-functions';

export const getVideosService = (page) => {
	const requestOptions = {
        method: 'GET'
    };

    return fetch(urlGetVideos(page), requestOptions).then(handleResponse);
}

export const getVideoDetailService = (title) => {
	console.log("getVideoDetailService");
	const requestOptions = {
        method: 'GET'
    };

    return fetch(urlGetVideoDetail(title), requestOptions).then(handleResponse);
}