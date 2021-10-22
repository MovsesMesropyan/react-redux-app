import API from '../../services/api/api';

import {
	GET_POSTS_START,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL
} from './actionTypes';

/* posts start */
export const getPostsStart = () => {
	return {
		type: GET_POSTS_START
	};
};

export const getPostsSuccess = posts => {
	return {
		type: GET_POSTS_SUCCESS,
		posts
	};
};

export const getPostsFail = () => {
	return {
		type: GET_POSTS_FAIL
	};
};

export const getPosts = () => {
	return (dispatch, getState) => {
		dispatch(getPostsStart());
		API.getPosts()
			.then(response => {
				dispatch(getPostsSuccess(response.data));
			})
			.catch( error => {
				dispatch(getPostsFail());
				console.log(error);
			});

	};
};
/* posts end */