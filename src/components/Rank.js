import React from 'react';

const Rank = ({ user }) => {
	return (
		<div className="score">
			<h2 className="score__text">{user.name}, your current number of entries is...</h2>
			<h1 className="score__ranking">{user.entries}</h1>
		</div>
	);
};

export default Rank;
