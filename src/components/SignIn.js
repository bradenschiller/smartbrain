import React from 'react';
import '../CSS/SignIn.css';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="signin">
			<div className="title">
				<h4 className="title__text">Sign In</h4>
			</div>
			<div className="signin__form">
				<input placeholder="Enter email address" type="text" className="username" />
				<input placeholder="Enter password" type="password" className="password" />
				<button onClick={() => onRouteChange('home')} className="signin__button">
					Sign In
				</button>
				<p onClick={() => onRouteChange('register')} className="signup__link">
					Register
				</p>
			</div>
		</div>
	);
};

export default SignIn;
