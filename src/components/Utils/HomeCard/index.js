import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { dislikeVideo, likeVideo } from '../../../actions/application.actions';
import { Link } from 'react-router-dom';
import { detailRoute } from '../../../constants/routes';

const HomeCard = ({ video, likeVideo, dislikeVideo }) => {
	const { image, durationMins, durationSecs, title, likes, dislikes, thumbAction } = video;
	return (
		<div className="home-card mb-4">
			<Link to={detailRoute(video.title)} className="image-container d-block">
				<img src={image} alt="" className="main-image" />
				<span className="duration">{durationMins}:{durationSecs}</span>
			</Link>
			<div className="card-footer">
				<div className="d-flex">
					<img src="https://cdn.pixabay.com/photo/2018/01/06/23/53/knight-3066217_960_720.jpg" alt="" className="logo-image mr-3" />
					<b>{title}</b>
				</div>
				<div className="thumbs-container py-2 d-flex">
					<span className={`thumb-box d-flex align-items-center mr-3 ${thumbAction === 'up' ? 'active' : ''}`} onClick={()=>likeVideo(video)}>
						<FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
						{likes}
					</span>
					<span className={`thumb-box d-flex align-items-center ${thumbAction === 'down' ? 'active' : ''}`} onClick={()=>dislikeVideo(video)}>
						<FontAwesomeIcon icon={faThumbsDown} className="mr-1" />
						{dislikes}
					</span>
				</div>
			</div>
		</div>
	);
};

HomeCard.propTypes = {

};

const actionCreators = {
	likeVideo,
	dislikeVideo
}

export default connect(null, actionCreators)(HomeCard);