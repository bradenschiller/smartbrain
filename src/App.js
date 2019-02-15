import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
import FaceRecognition from './components/FaceRecognition';
import Navigation from './components/Navigation';
import Clarifai from 'clarifai';
import { clarifai_api_key } from './keys';

const app = new Clarifai.App({
	apiKey: clarifai_api_key
});
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		};
	}

	onInputChange = (e) => {
		console.log(e.target.value);
	};

	onSubmit = () => {
		app.models.predict('a403429f2ddf4b49b307e318f00e528b', 'https://samples.clarifai.com/face-det.jpg').then(
			function(response) {
				console.log(response);
			},
			function(err) {
				console.log(err);
			}
		);
	};

	render() {
		return (
			<div>
				<Navigation />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
				<FaceRecognition />
			</div>
		);
	}
}

export default App;
