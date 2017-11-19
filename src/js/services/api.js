
import axios from 'axios';
import config from './apiConfig';

function request (action) {
	debugger;
	return axios.request({
		url: action.endpoint,
		method: action.httpMethod,
		baseURL: config.baseURL,
		headers: Object.assign({}, config.headers, action.headers)
	});
}

export { request };
