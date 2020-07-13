import { combineReducers } from 'redux';
import babiesReducer from './babiesReducer';
import poopsReducer from './poopsReducer';
import foodReducer from './foodReducer';
import extractionsReducer from './extractionsReducer';

export default combineReducers({
  babiesReducer,
  poopsReducer,
  foodReducer,
  extractionsReducer
});
