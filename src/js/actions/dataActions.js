import Types from '../types';

const getData = () => {
	return {
		type: Types.GET_GAIA_DATA_API,
		endpoint: 'videos/term/119931',
		httpMethod: 'GET',
		onSuccess: getDataSuccess,
		onFailure: getDataFailure
	}
}

const getDataSuccess = (response) => {
	return {
		type: Types.GET_GAIA_DATA_SUCCESS,
		data: response
	}
}
const getDataFailure = (response) => {
	return {
		type: Types.GET_GAIA_DATA_FAILURE
	}
}

export {
	getData,
	getDataSuccess,
	getDataFailure
}