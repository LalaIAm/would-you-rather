import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';
import LogRocket from 'logrocket';

export default applyMiddleware(thunk, logger, LogRocket.reduxMiddleware());