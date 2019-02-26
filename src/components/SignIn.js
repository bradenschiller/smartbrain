import React, { Component } from 'react';
import '../CSS/SignIn.css';
export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleClick = (email, password) => {
		this.submitSignIn(email, password);
	};

	handleEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	handlePassword = (e) => {
		this.setState({ password: e.target.value });
	};

	submitSignIn = (email, password) => {
		const otherParam = {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: email,
				password: password
			})
		};

		fetch('http://localhost:3000/signin', otherParam)
			.then((data) => data.json())
			.then((res) => {
				if (res === 'success') {
					this.props.onRouteChange('home');
				}
			})
			.catch((err) => console.log(err));
	};
	render() {
		const { onRouteChange } = this.props;
		const { email, password } = this.state;

		return (
			<div className="signin">
				<div className="title">
					<h4 className="title__text">Sign In</h4>
				</div>
				<div className="signin__form">
					<input
						onChange={(e) => this.handleEmail(e)}
						placeholder="Enter email address"
						type="text"
						className="username"
					/>
					<input
						onChange={(e) => this.handlePassword(e)}
						placeholder="Enter password"
						type="password"
						className="password"
					/>
					<button onClick={() => this.handleClick(email, password)} className="signin__button">
						Sign In
					</button>
					<p onClick={() => onRouteChange('register')} className="signup__link">
						Register
					</p>
				</div>
			</div>
		);
	}
}
