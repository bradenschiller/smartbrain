import React, { Component } from 'react';
import './App.css';
// import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
import Rank from './components/Rank';
// import FaceRecognition from './components/FaceRecognition';
import Navigation from './components/Navigation';
class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<Rank />
				{/*<Logo />
				<FaceRecognition />*/}
				<ImageLinkForm />
			</div>
		);
	}
}

export default App;
