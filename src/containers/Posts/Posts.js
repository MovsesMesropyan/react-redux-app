import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Post from '../../components/Post/Post';

const Posts = ({ posts, users }) => {
	const [searchWord, handleSearch] = useState('');

	let _posts = posts.map(p => {
		const _user = ((users).filter(u => u.id === p.userId) || [])[0] || {};
		return {...p, author: _user.name}
	});

	if(searchWord) {
		_posts =  _posts.filter(p => (p.author || '').toLowerCase().indexOf(searchWord.toLowerCase()) > -1);
	}

	return (
		<div className="page-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-title">Posts</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-12 col-md-8">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text"><i className="fas fa-search"></i></span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="Username"
								onChange={e => handleSearch(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					{_posts.length ?
						_posts.map(post => <Post key={post.id} post={post} />) :
						<div className="col-lg-12">
							<p className="d-flex justify-content-center">List is empty</p>
						</div>
					}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		posts: state.posts.posts,
		users: state.users.users
	};
};

Posts.propTypes = {
	posts: PropTypes.array,
	users: PropTypes.array
};


export default connect(mapStateToProps, null)(Posts);