import React, { Component } from 'react';
import './CSS/App.css';
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
			imageUrl: '',
			box: {}
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
		console.log(box);
		this.setState({ box: box });
	};

	onInputChange = (e) => {
		this.setState({
			input: e.target.value
		});
	};

	onSubmit = async () => {
		this.setState({ imageUrl: this.state.input });
		try {
			const response = await app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input);
			this.displayFaceBox(this.calculateFaceLocation(response));
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<div>
				<Navigation />
				<Rank />
				<ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
				<FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
