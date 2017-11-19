import React from 'react';
import NavLink from './NavLink';

require('../../../styles/header.scss')

const Header = (props) => {
	return (
		<section className="row">
			<header className="navbar-header col-xs-12">
				<div className="clearfix p-x-4 p-y-2">
					<div className="col-xs-6">
						<img src="/src/images/logo.svg" alt="gaia logo"/>
					</div>
					<div className="col-xs-6 text-right">
						<span className="profile-name p-r-1">Chris</span>
						<span className="glyphicon glyphicon-user profile-icon"></span>
					</div>
				</div>
				<div className="navbar-footer col-xs-12 p-y-2">
					<div className="col-sm-8">
						<ul className="nav clearfix m-b-0">
						{
							props.navLinks.map((el, i) => {
								return <NavLink name={el} key={i}/>
							})
						}
						</ul>
					</div>
					<div className="col-sm-4">
						<input
							className="nav-search"
							type="text"
							placeholder={props.searchPlaceholder}/>
					</div>
				</div>
			</header>
		</section>
	);
}

export default Header;