import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import User from '../../components/User/User';

const Users = ({ users }) => {

	return (
		<div className="page-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-title">Users</h1>
					</div>
				</div>
				<div className="row">
					{users.length ?
						users.map(user => <User key={user.id} user={user} />) :
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
		users: state.users.users
	};
};

Users.propTypes = {
	users: PropTypes.array,
};

export default connect(mapStateToProps, null)(Users);