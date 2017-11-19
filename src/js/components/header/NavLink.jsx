import React from 'react';

const NavLink = (props) => {
	return (
		<li className="nav-item">
			<a href="javascript:void(0)" className="nav-link p-x-2">{props.name}</a>
		</li>
	)
}

export default NavLink;