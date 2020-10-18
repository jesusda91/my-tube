import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Layout from './../components/Layout';
import Detail from '../components/Detail';
import { getVideoDetailService } from '../services/Video';

const DetailContainer = ({ title }) => {
	const [video, setVideo] = useState({});

	useEffect(() => {
		getVideoDetailService(title).then(video => setVideo(video));
	}, [title]);

	return (
		<Layout>
			<Detail video={video} setVideo={setVideo} title={title} />
		</Layout>
	);
};

DetailContainer.propTypes = {

};

export default DetailContainer;