import React, { Component } from 'react';
import './CSS/App.css';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Clarifai from 'clarifai';
import { clarifai_api_key } from './keys';

const app = new Clarifai.App({
	apiKey: clarifai_api_key
});
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			imageUrl: '',
			box: {},
			route: 'signin',
			isSignedIn: false,
			user: {
				id: '',
				name: '',
				email: '',
				entries: 0,
				joined: ''
			}
		};
	}

	calculateFaceLocation = (response) => {
		const clarifiaFace = response.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputImg');
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			left: clarifiaFace.left_col * width,
			top: clarifiaFace.top_row * height,
			right: width - clarifiaFace.right_col * width,
			bottom: height - clarifiaFace.bottom_row * height
		};
	};

	displayFaceBox = (box) => {
		this.setState({ box: box });
	};

	onInputChange = (e) => {
		this.setState({
			input: e.target.value
		});
	};

	onSubmit = async () => {
		const { input } = this.state;
		this.setState({ imageUrl: input });
		try {
			const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
			if (response) {
				const data = await fetch('http://localhost:3000/image', {
					method: 'put',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						id: this.state.user.id
					})
				});
				const count = await data.json();
				console.log(count);
				this.setState(Object.assign(this.state.user, { entries: count }));
			}
			this.displayFaceBox(this.calculateFaceLocation(response));
		} catch (err) {
			alert(err);
		}
	};

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState({ isSignedIn: false });
		} else if (route === 'home') {
			this.setState({ isSignedIn: true });
		}
		this.setState({ route: route });
	};

	loadUser = (user) => {
		this.setState({
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				entries: user.entries,
				joined: user.joined
			}
		});
		console.log(this.state.user);
	};

	render() {
		const { isSignedIn, box, imageUrl, route } = this.state;
		return (
			<div>
				<Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
				{route === 'home' ? (
					<div>
						<Rank user={this.state.user} />
						<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
						<FaceRecognition box={box} imageUrl={imageUrl} />
					</div>
				) : route === 'signin' ? (
					<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
				) : (
					<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
				)}
			</div>
		);
	}
}

export default App;
