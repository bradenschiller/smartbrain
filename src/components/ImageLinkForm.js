import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
	return (
		<div className="image-link">
			<input
				onChange={onInputChange}
				type="text"
				className="image-link__input"
				placeholder="Enter Image Link Here"
			/>
			<button onClick={onSubmit} className="image-link__submitBtn">
				Go!
			</button>
		</div>
	);
};

export default ImageLinkForm;
