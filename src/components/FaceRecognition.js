import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className="face-recognition-container">
			<img className="face-recognition" src={imageUrl} alt="facial_recognition" />
		</div>
	);
};

export default FaceRecognition;
