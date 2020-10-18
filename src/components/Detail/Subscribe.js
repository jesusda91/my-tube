import React from 'react';
import PropTypes from 'prop-types';
import { parseNumber } from '../../helpers/common-functions';

const Subscribe = ({ channel, subscribers }) => {
	console.log(subscribers, typeof subscribers);
	return (
		<div className="subscribe-container d-flex py-2 my-2">
			<img src="https://cdn.pixabay.com/photo/2018/01/06/23/53/knight-3066217_960_720.jpg" alt="" className="logo-image mr-3" />
			<div className="text-ctn">
				<p className="mb-0 channel">{channel}</p>
				<p className="mb-0 subscribers">{parseNumber(subscribers)} subscribers</p>
			</div>
			<button>
				Subscribe
			</button>
		</div>
	);
};

Subscribe.propTypes = {

};

export default Subscribe;