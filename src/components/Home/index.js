import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeCard from '../Utils/HomeCard';
import { connect } from 'react-redux';
import { importResource } from './../../helpers/common-functions';
import { getVideos, increasePage } from '../../actions/application.actions';
/* global Modernizr */

class Home extends Component {

	scrollCallback = ()=>{
		const { requestingVideos, getVideos, increasePage, currentPage, totalPages } = this.props;
		if (currentPage < totalPages && !requestingVideos && window.scrollY >= document.body.clientHeight - window.innerHeight) {
			increasePage();
			getVideos(currentPage+1);
		}
	}

	componentDidMount() {
		importResource({
			script: "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
			id: "modernizr",
			async: true,
		});
		const validateModernizr = () =>{
			if(window.Modernizr){
				return window.addEventListener('scroll', this.scrollCallback, Modernizr.passiveeventlisteners ? {passive: true} : false);
			}
			setTimeout(validateModernizr, 300);
		}
		validateModernizr();
	}

	render() {
		const { videos } = this.props;
		return (
			videos.map((video, index) => (
				<HomeCard video={video} key={`${video.title}-${index}`} />
			))
		);
	}
}

const mapStateToProps = ({
	applicationReducer: {
		currentPage,
		videos,
		totalPages,
		requestingVideos
	}
}) => ({ currentPage, videos, totalPages, requestingVideos });

const actionCreators = {
	increasePage,
	getVideos
}

export default connect(mapStateToProps, actionCreators)(Home);