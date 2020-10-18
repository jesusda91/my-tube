import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faHome, faPhotoVideo, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { homeRoute, libraryRoute, subscriptionsRoute, trendingRoute } from '../../constants/routes';

const NavItem = ({ text, icon, route }) => (
	<Link to={route} className="nav-item d-flex flex-column align-items-center p-2 pt-3">
		<FontAwesomeIcon icon={icon} />
		{text}
	</Link>
)

const NavigationBar = props => {
	return (
		<div className="navigation-bar d-flex">
			<NavItem
				text="Home"
				icon={faHome}
				route={homeRoute}
			/>
			<NavItem
				text="Trending"
				icon={faFire}
				route={trendingRoute}
			/>
			<NavItem
				text="Subscriptions"
				icon={faPlayCircle}
				route={subscriptionsRoute}
			/>
			<NavItem
				text="Library"
				icon={faPhotoVideo}
				route={libraryRoute}
			/>
		</div>
	);
};

NavigationBar.propTypes = {

};

export default NavigationBar;