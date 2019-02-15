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
			input: '',
			imageUrl: ''
		};
	}

	onInputChange = (e) => {
		this.setState({
			input: e.target.value
		});
	};

	onSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		console.log(this.state.imageUrl);
		app.models.predict(Clarifai.COLOR_MODEL, 'https://samples.clarifai.com/face-det.jpg').then(
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
				<FaceRecognition imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
