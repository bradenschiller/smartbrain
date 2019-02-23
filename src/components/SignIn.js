import React from 'react';
import '../CSS/SignIn.css';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="sign-in-container">
			<div className="form-title-container">
				<h4 className="form-title">Sign In</h4>
			</div>
			<div className="sign-in-form">
				<input placeholder="Enter email address" type="text" className="username" />
				<input placeholder="Enter password" type="password" className="password" />
				<button onClick={() => onRouteChange('home')} className="sign-in-button">
					Sign In
				</button>
				<p onClick={() => onRouteChange('register')} className="sign-up-link">
					Register
				</p>
			</div>
		</div>
	);
};

export default SignIn;
