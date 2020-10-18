import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Thumbs = ({ video, setVideo }) => {
	const { likes, dislikes, thumbAction } = video;

	const likeVideo = () => {
		if (thumbAction==="up") {
			return setVideo({ ...video, thumbAction: null, likes: likes - 1 });
		} else {
			if (thumbAction==="down") {
				return setVideo({ ...video, thumbAction: 'up', likes: likes + 1, dislikes: dislikes -1 });
			}
			return setVideo({ ...video, thumbAction: 'up', likes: likes + 1 });
		}
	}

	const dislikeVideo = () => {
		if (thumbAction==="down") {
			return setVideo({ ...video, thumbAction: null, dislikes: dislikes - 1 });
		} else {
			if (thumbAction==="up") {
				return setVideo({ ...video, thumbAction: 'down', dislikes: dislikes + 1, likes: likes - 1 });
			}
			return setVideo({ ...video, thumbAction: 'down', dislikes: dislikes + 1 });
		}
	}

	return (
		<>
			<span className={`thumb-box d-flex flex-column align-items-center mr-3 ${thumbAction === 'up' ? 'active' : ''}`} onClick={likeVideo}>
				<FontAwesomeIcon icon={faThumbsUp} />
				{likes}
			</span>
			<span className={`thumb-box d-flex flex-column align-items-center ${thumbAction === 'down' ? 'active' : ''}`} onClick={dislikeVideo}>
				<FontAwesomeIcon icon={faThumbsDown} />
				{dislikes}
			</span>
		</>
	);
};

Thumbs.propTypes = {

};

export default Thumbs;