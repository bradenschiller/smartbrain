import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
// import FaceRecognition from './components/FaceRecognition';
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
		app.models.predict('d94f289761a143ae80b9b42b892bd5f1', 'https://samples.clarifai.com/face-det.jpg').then(
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
				{/*<FaceRecognition />*/}
				<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default App;
