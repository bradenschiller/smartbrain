import React from 'react';

const SignIn = () => {
	return (
		<div className="sign-in-container">
			<div className="form-title-container">
				<h4 className="form-title">Sign In</h4>
			</div>
			<form className="sign-in-form" action="">
				<input placeholder="Enter name address" type="text" className="name" />
				<input placeholder="Enter password" type="password" className="password" />
				<button className="sign-in-button">Register</button>
			</form>
		</div>
	);
};

export default SignIn;
