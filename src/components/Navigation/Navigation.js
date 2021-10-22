import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	const [toggle, handleToggle] = useState(false);

	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/posts">APP</Link>
				<button className="navbar-toggler" type="button" onClick={() => handleToggle(!toggle)}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" style={toggle ? {display: 'flex'} : null}>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink exact to="/posts" className="nav-link">Posts</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact to="/users" className="nav-link">Users</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};


export default Navigation;