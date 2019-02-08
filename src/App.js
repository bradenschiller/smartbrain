import React, { Component } from 'react';
import './App.css';
// import Logo from './components/Logo';
import ImageLinkForm from './components/ImageLinkForm';
// import FaceRecognition from './components/FaceRecognition';
import Navigation from './components/Navigation';
class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				{/*<Logo />
        <FaceRecognition />*/}
				<ImageLinkForm />
			</div>
		);
	}
}

export default App;
