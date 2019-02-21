import React from 'react';
import '../CSS/faceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className="face-recognition-container">
			{imageUrl !== '' ? <FaceImage box={box} imageUrl={imageUrl} /> : ''}
		</div>
	);
};

const FaceImage = ({ box, imageUrl }) => {
	return (
		<div className="face-image-container">
			<img id="inputImg" className="face-recognition" src={imageUrl} alt="" width="700px" height="auto" />
			<div
				className="bounding-box"
				style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }}
			/>
		</div>
	);
};

export default FaceRecognition;
