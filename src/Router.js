
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import * as routes from './constants/routes';
import Loading from './components/Utils/Loading';

const HomeContainer = React.lazy(() => import('./containers/HomeContainer'));
const DetailContainer = React.lazy(() => import('./containers/DetailContainer'));
const LibraryContainer = React.lazy(() => import('./containers/LibraryContainer'));
const SubscriptionsContainer = React.lazy(() => import('./containers/SubscriptionsContainer'));
const TrendingContainer = React.lazy(() => import('./containers/TrendingContainer'));

const Router = props => {
	return (
		<Suspense fallback={<Loading />}>
			<Route exact path={routes.homeRoute} component={HomeContainer} />
			<Route exact path={routes.detailRout} component={DetailContainer} />
			<Route exact path={routes.trendingRoute} component={TrendingContainer} />
			<Route exact path={routes.subscriptionsRoute} component={SubscriptionsContainer} />
			<Route exact path={routes.libraryRoute} component={LibraryContainer} />
		</Suspense>
	);
};

Router.propTypes = {

};

export default Router;