import React, { Component } from 'react';

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: ''
		};
	}
	handleRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password
			})
		})
			.then((data) => data.json())
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	handleNameInput = (e) => {
		this.setState({ name: e.target.value });
	};

	handleEmailInput = (e) => {
		this.setState({ email: e.target.value });
	};

	handlePasswordInput = (e) => {
		this.setState({ password: e.target.value });
	};

	render() {
		return (
			<div className="signin">
				<div className="title">
					<h4 className="title__text">Sign In</h4>
				</div>
				<div className="signin__form">
					<input
						onChange={(e) => this.handleNameInput(e)}
						placeholder="Enter your full name"
						type="text"
						className="name"
					/>
					<input
						onChange={(e) => this.handleEmailInput(e)}
						placeholder="Enter email address"
						type="text"
						className="email"
					/>
					<input
						onChange={(e) => this.handlePasswordInput(e)}
						placeholder="Enter password"
						type="password"
						className="password"
					/>
					<button
						onClick={() => {
							this.handleRegister();
						}}
						className="signin__button"
					>
						Register
					</button>
				</div>
			</div>
		);
	}
}
