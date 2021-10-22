import React from 'react';
import spinner from '../../../assets/images/spinner.gif';
import './Loader.css';

const Loader = () => (
	<div className="loader-container">
		<img className="loader center" alt="" src={spinner} />
	</div>
);

export default Loader;