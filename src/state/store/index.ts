import { reducers } from './../reducer/index';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
