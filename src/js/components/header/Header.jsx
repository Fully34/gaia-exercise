import React from 'react';

import NavLink from './NavLink';
import Search from './Search';

require('../../../styles/header.scss')

const Header = (props) => {

	return (
		<section class="row">
			<header className="navbar-header col-xs-12">
				<div className="clearfix p-x-4 p-y-2">
					<div className="col-xs-6">
						<img src="/src/images/logo.svg" alt="gaia logo"/>
					</div>
					<div className="col-xs-6 text-right">
						<span className="profile-name p-r-1">Christopher Fullinwider</span>
						<span className="glyphicon glyphicon-user profile-icon"></span>
					</div>
				</div>
				<div className="panel-footer col-xs-12">
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
						<Search placeholder={props.searchPlaceholder} />
					</div>
				</div>
			</header>
		</section>
	);
}

export default Header;