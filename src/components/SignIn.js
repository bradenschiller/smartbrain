import React from 'react';
import '../CSS/SignIn.css';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="sign-in-container">
			<div className="form-title-container">
				<h4 className="form-title">Sign In</h4>
			</div>
			<form className="sign-in-form" action="">
				<input placeholder="Enter email address" type="text" className="username" />
				<input placeholder="Enter password" type="password" className="password" />
				<button onClick={() => onRouteChange('home')} className="sign-in-button">
					Sign In
				</button>
				<a className="sign-up-link" href="#">
					Register
				</a>
			</form>
		</div>
	);
};

export default SignIn;
