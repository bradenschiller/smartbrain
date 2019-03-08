import React, { useState } from 'react';
import './CSS/App.css';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Clarifai from 'clarifai';
import { clarifai_api_key } from './keys';

const App = () => {
	const initalState = {
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

	const app = new Clarifai.App({
		apiKey: clarifai_api_key
	});

	const [ state, setState ] = useState(initalState);

	console.log(state);

	const calculateFaceLocation = (response) => {
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

	const displayFaceBox = (box) => {
		setState({ ...state, box: box });
	};

	const onInputChange = (e) => {
		setState({
			...state,
			input: e.target.value
		});
	};

	const onSubmit = async () => {
		const { input } = state;
		setState({ ...state, imageUrl: input });
		try {
			const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, input);
			if (response) {
				const data = await fetch('http://localhost:3000/image', {
					method: 'put',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						id: state.user.id
					})
				});
				const count = await data.json();
				setState({ ...state, entries: count });
			}
			displayFaceBox(calculateFaceLocation(response));
		} catch (err) {
			alert(err);
		}
	};

	const onRouteChange = (route) => {
		if (route === 'signout') {
			setState(initalState);
		} else if (route === 'home') {
			setState({ ...state, isSignedIn: true });
		}
		setState({ ...state, route: route });
	};

	const loadUser = (user) => {
		setState({
			...state,
			user: {
				id: user.id,
				name: user.name,
				email: user.email,
				entries: user.entries,
				joined: user.joined
			}
		});
	};
	const { isSignedIn, box, imageUrl, route } = state;
	return (
		<div>
			<Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
			{route === 'home' ? (
				<div>
					<Rank user={state.user} />
					<ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
					<FaceRecognition box={box} imageUrl={imageUrl} />
				</div>
			) : route === 'signin' ? (
				<SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
			) : (
				<Register loadUser={loadUser} onRouteChange={onRouteChange} />
			)}
		</div>
	);
};

export default App;
