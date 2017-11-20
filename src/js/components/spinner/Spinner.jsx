import React from 'react';

// spinner css
require('../../../styles/spinner.scss');

const Spinner = () => {
	return (
		<div className="spinner-container">
			<img src="/src/images/loading-gif-transparent-11.gif" alt="loading graphic" className="spinner"/>
		</div>
	);
}

export default Spinner;