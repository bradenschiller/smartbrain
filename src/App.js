import React, { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
// import FaceRecognition from './components/FaceRecognition';
import Navigation from './components/Navigation';
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
		console.log('clicked');
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
