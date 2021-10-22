import React from 'react';

const User = ({ user }) => {

	return (
		<div  className="user-item col-sm-4">
			<div className="card">
				<div className="card-body">
					<h3 className="card-title ellipsis">{user.name}</h3>
				</div>
			</div>
		</div>
	);
};

export default User;