import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className="face-recognition-container">
			<img className="face-recognition" src={imageUrl} alt="facial_recognition" width="700px" height="auto" />
		</div>
	);
};

export default FaceRecognition;
