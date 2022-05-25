import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import covidData from './covid/covid';

const rootReducer = combineReducers({ covidData });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
