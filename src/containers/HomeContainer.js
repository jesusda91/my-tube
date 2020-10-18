import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from './../components/Layout';
import Home from './../components/Home';
import { connect } from 'react-redux';
import { getVideos } from '../actions/application.actions';

const HomeContainer = ({ getVideos }) => {
	useEffect(() => {
		getVideos(1);
	}, [getVideos]);

	return (
		<Layout>
			<Home />
		</Layout>
	);
};

HomeContainer.propTypes = {
	getVideos: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
};

const actionCreators = {
	getVideos
}

export default connect(null, actionCreators)(HomeContainer);