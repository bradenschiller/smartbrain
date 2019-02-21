import React from 'react';

const Navigation = ({ onRouteChange }) => {
	return (
		<div className="navbar">
			<ul className="nav-container">
				<li className="nav-items">
					<a href="#">Sign In</a>
				</li>
				<li className="nav-items last-nav-item">
					<a onClick={() => onRouteChange('signin')} href="#">
						Sign Out
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
