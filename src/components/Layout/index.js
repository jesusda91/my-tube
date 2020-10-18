import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import './styles.scss';
import Navbar from './Navbar';

const index = ({ children }) => {
	return (
		<div className="layout d-flex flex-column">
			<Navbar />
			<div className="content-wrapper container px-1 px-md-1">
				{children}
			</div>
			<NavigationBar />
		</div>
	);
};

index.propTypes = {

};

export default index;