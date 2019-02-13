import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div className="image-link-container">
			<input onChange={onInputChange} type="text" className="image-link" placeholder="Enter Image Link Here" />
			<button onClick={onSubmit} className="submit-image">
				Go!
			</button>
		</div>
	);
};

export default ImageLinkForm;
