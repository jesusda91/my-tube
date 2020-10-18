import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './../reducers';
import { NODE_ENV } from '../constants/env';

let middleware = [thunkMiddleware]
let composeEnhancers;

if (NODE_ENV === "development") {
	const loggerMiddleware = createLogger();
	middleware.push(loggerMiddleware);
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
	composeEnhancers = compose;
}

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware))
);