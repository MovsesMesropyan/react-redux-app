import {
	GET_POSTS_START,
	GET_POSTS_SUCCESS,
	GET_POSTS_FAIL
} from '../actions/actionTypes';
import utils from '../../services/utils';

const initialState = {
	posts: [],
	loading: false
};

/* posts start */
const getPostsStart = (state, action) => {
	return utils.updateObject(state, {
		loading: true
	});
};

const getPostsSuccess = (state, action) => {
	return utils.updateObject(state, {
		posts: action.posts,
		loading: false
	});
};

const getPostsFail = (state, action) => {
	return utils.updateObject(state, {
		posts: [],
		loading: false
	});
};
/* posts end */

const postsReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case GET_POSTS_START: return getPostsStart(state, action);
		case GET_POSTS_SUCCESS: return getPostsSuccess(state, action);
		case GET_POSTS_FAIL: return getPostsFail(state, action);

		default:
			return state;
	}
};

export default postsReducer;