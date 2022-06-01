import { combineReducers } from 'redux';

import bankReducers from './bankReducers';

const reducers = combineReducers({ bankReducers });

export default reducers;

export type State = ReturnType<typeof reducers>;
