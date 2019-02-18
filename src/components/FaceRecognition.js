import React from 'react';
import './faceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className="face-recognition-container">
			<div className="face-image-container">
				<img
					id="inputImg"
					className="face-recognition"
					src={imageUrl}
					alt="facial_recognition"
					width="700px"
					height="auto"
				/>
				<div
					className="bounding-box"
					style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }}
				/>
			</div>
		</div>
	);
};

export default FaceRecognition;
