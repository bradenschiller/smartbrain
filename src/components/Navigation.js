import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<div className="navbar">
				<ul className="nav-container">
					<li className="nav-items last-nav-item">
						<p onClick={() => onRouteChange('signout')}>Sign Out</p>
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="navbar">
				<ul className="nav-container">
					<li className="nav-items last-nav-item">
						<p onClick={() => onRouteChange('register')}>Register</p>
					</li>
					<li className="nav-items last-nav-item">
						<p onClick={() => onRouteChange('signin')}>Sign In</p>
					</li>
				</ul>
			</div>
		);
	}
};

export default Navigation;
