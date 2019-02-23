import React from 'react';

const SignIn = ({ onRouteChange }) => {
	return (
		<div className="signin">
			<div className="title">
				<h4 className="title__text">Sign In</h4>
			</div>
			<div className="signin__form">
				<input placeholder="Enter your full name" type="text" className="name" />
				<input placeholder="Enter email address" type="text" className="email" />
				<input placeholder="Enter password" type="password" className="password" />
				<button className="signin__button">Register</button>
			</div>
		</div>
	);
};

export default SignIn;
