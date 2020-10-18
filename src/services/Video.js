import { urlGetVideos } from './../constants/urls';
import { handleResponse } from './../helpers/common-functions';

export const getVideosService = (page) => {
	const requestOptions = {
        method: 'GET'
    };

    return fetch(urlGetVideos(page), requestOptions).then(handleResponse);
}