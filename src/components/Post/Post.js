import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => {

	return (
		<div  className="post-item col-12 col-md-4 col-sm-6">
			<div className="card">
				<div className="card-body">
					<h3 className="card-title ellipsis">{post.title}</h3>
					<p className="card-text content">{post.body}</p>
					<p className="card-text author">{post.author}</p>
				</div>
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object
};

export default Post;