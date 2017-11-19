import React from 'react';

require('../../styles/header.scss')

const Header = () => {
	return (
		<header className="navbar panel">
			<div className="panel-body">
				<div className="m-x-2 clearfix">
					<div className="col-xs-6">
						<img src="/src/images/logo.svg" alt="gaia logo"/>
					</div>
					<div className="col-xs-6 text-right">
						<span className="profile-name p-r-1">Christopher Fullinwider</span>
						<span className="glyphicon glyphicon-user profile-icon"></span>
					</div>
				</div>
				<div className="m-x-2 clearfix">
					
				</div>
			</div>
		</header>
	);
}

export default Header;