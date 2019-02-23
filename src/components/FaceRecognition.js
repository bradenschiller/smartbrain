import React from 'react';
import '../CSS/faceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return <div className="face-recognition">{imageUrl !== '' ? <FaceImage box={box} imageUrl={imageUrl} /> : ''}</div>;
};

const FaceImage = ({ imageUrl, box }) => {
	return (
		<div className="face-image">
			<img id="inputImg" className="face-image__img" src={imageUrl} alt="" />
			<div
				className="bounding-box"
				style={{ top: box.top, right: box.right, bottom: box.bottom, left: box.left }}
			/>
		</div>
	);
};

export default FaceRecognition;
