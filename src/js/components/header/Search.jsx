import React from 'react';

const Search = (props) => {
	return (
		<input
			className="nav-search"
			type="text"
			placeholder={props.placeholder}/>
	);
}

export default Search;