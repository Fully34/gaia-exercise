import { createReducer } from 'reduxsauce';
import { combineReducers } from 'redux';
import Types from '../types';

const initialState = {
	fetching: false,
	hero: {},
	videoTiles: []
};

const getData = (state, action) => {
	return Object.assign({}, state, {
		...state,
		fetching: true
	})
}

const getDataSuccess = (state, action) => {
	return Object.assign({}, state, {
		// data is mapped and validated in the API
		...action.data,
		fetching: false
	})
}

const getDataFailure = (state, action) => {
	return Object.assign({}, state, {
		...state,
		fetching: false,
		error: true
	})
}

const dataReducer = createReducer(initialState,{
	[Types.GET_GAIA_DATA_API]: getData,
	[Types.GET_GAIA_DATA_SUCCESS]: getDataSuccess,
	[Types.GET_GAIA_DATA_FAILURE]: getDataFailure
});

export default combineReducers({
	data: dataReducer
});