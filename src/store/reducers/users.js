import {
	GET_USERS_START,
	GET_USERS_SUCCESS,
	GET_USERS_FAIL
} from '../actions/actionTypes';
import utils from '../../services/utils';

const initialState = {
	users: [],
	loading: false
};

/* users start */
const getUsersStart = (state, action) => {
	return utils.updateObject(state, {
		loading: true
	});
};

const getUsersSuccess = (state, action) => {
	return utils.updateObject(state, {
		users: action.users,
		loading: false
	});
};

const getUsersFail = (state, action) => {
	return utils.updateObject(state, {
		users: [],
		loading: false
	});
};
/* users end */

const usersReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case GET_USERS_START: return getUsersStart(state, action);
		case GET_USERS_SUCCESS: return getUsersSuccess(state, action);
		case GET_USERS_FAIL: return getUsersFail(state, action);

		default:
			return state;
	}
};

export default usersReducer;