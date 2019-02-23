import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<div className="navbar">
				<ul className="nav-container">
					<li className="navbar__items navbar__last-nav-items">
						<p onClick={() => onRouteChange('signout')}>Sign Out</p>
					</li>
				</ul>
			</div>
		);
	} else {
		return (
			<div className="navbar">
				<ul className="nav-container">
					<li className="navbar__items">
						<p onClick={() => onRouteChange('register')}>Register</p>
					</li>
					<li className="navbar__items navbar__last-nav-items">
						<p onClick={() => onRouteChange('signin')}>Sign In</p>
					</li>
				</ul>
			</div>
		);
	}
};

export default Navigation;
