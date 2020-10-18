import React from 'react';
import PropTypes from 'prop-types';
import HomeCard from '../Utils/HomeCard';
import { connect } from 'react-redux';

const Home = ({ currentPage, videos }) => {
	return (
		<div>
			{
				videos.map(video=>(
					<HomeCard video={video} />
				))
			}
		</div>
	);
};

Home.propTypes = {

};

const mapStateToProps = ({
	applicationReducer: {
		currentPage,
		videos
	}
}) => ({ currentPage, videos });

export default connect(mapStateToProps, null)(Home);