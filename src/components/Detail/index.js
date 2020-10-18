import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Thumbs from './Thumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faSave, faShare } from '@fortawesome/free-solid-svg-icons';
import { parseNumber } from '../../helpers/common-functions';
import Subscribe from './Subscribe';

const Detail = ({ video, setVideo }) => {
	const { title, views, subscribers, channel } = video;
	return (
		<div className="video-detail-container">
			<video controls>
				<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
				<source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
				Your browser does not support the video tag.
			</video>
			<div className="px-2 info-container">
				<h1>
					{title}
				</h1>
				<p className="views">
					{parseNumber(views)} views
				</p>
				<div className="thumbs-container d-flex justify-content-between">
					<Thumbs
						video={video}
						setVideo={setVideo}
					/>
					<span className="thumb-box d-flex flex-column align-items-center mr-3">
						<FontAwesomeIcon icon={faShare} />
						share
					</span>
					<span className="thumb-box d-flex flex-column align-items-center mr-3">
						<FontAwesomeIcon icon={faSave} />
						save
					</span>
					<span className="thumb-box d-flex flex-column align-items-center mr-3">
						<FontAwesomeIcon icon={faFlag} />
						report
					</span>
				</div>
				<Subscribe
					subscribers={subscribers}
					channel={channel}
				/>
			</div>
		</div>
	);
};

Detail.propTypes = {

};

export default Detail;