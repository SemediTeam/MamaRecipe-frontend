import { createStore,applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import PromiseMiddleware from 'redux-promise-middleware';

import Reducers from "./reducers";

const logger = createLogger();
const enchancer = applyMiddleware(logger,PromiseMiddleware);
const Storage = createStore(Reducers,enchancer);

export default Storage
