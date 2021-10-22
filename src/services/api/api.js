import axios from 'axios';

const API = {
	getPosts: () => {
		return axios.get(`https://jsonplaceholder.typicode.com/posts`);
	},
	getUsers: () => {
		return axios.get(`https://jsonplaceholder.typicode.com/users`);
	},
};

export default API;
