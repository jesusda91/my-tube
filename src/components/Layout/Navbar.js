import React from 'react';
import logo from './../../images/mytube.png';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light sticky-top">
			<img src={logo} alt="" className="logo" />
			<FontAwesomeIcon icon={faUserAstronaut} />
		</nav>
	);
};

export default Navbar;