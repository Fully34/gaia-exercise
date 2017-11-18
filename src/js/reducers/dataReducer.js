import { combineReducers } from 'redux';
import { GET_GAIA_EXERCISE_API, GET_GAIA_EXERCISE_SUCCESS, GET_GAIA_EXERCISE_FAILURE } from '../types';

const initialState = {
	data: {}
};

const dataReducer = (state, action) => {
	switch(action.type) {
		case GET_GAIA_EXERCISE_API:
			return initialState
	}
}

export default dataReducer;