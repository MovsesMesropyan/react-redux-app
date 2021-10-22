import API from '../../services/api/api';

import {
	GET_USERS_START,
	GET_USERS_SUCCESS,
	GET_USERS_FAIL
} from './actionTypes';

/* users start */
export const getUsersStart = () => {
	return {
		type: GET_USERS_START
	};
};

export const getUsersSuccess = users => {
	return {
		type: GET_USERS_SUCCESS,
		users
	};
};

export const getUsersFail = () => {
	return {
		type: GET_USERS_FAIL
	};
};

export const getUsers = () => {
	return (dispatch, getState) => {
		dispatch(getUsersStart());
		API.getUsers()
			.then(response => {
				dispatch(getUsersSuccess(response.data));
			})
			.catch( error => {
				dispatch(getUsersFail());
				console.log(error);
			});

	};
};
/* users end */