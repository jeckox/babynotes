import { combineReducers } from 'redux';
import babiesReducer from './babiesReducer';
import poopsReducer from './poopsReducer';

export default combineReducers({
  babiesReducer,
  poopsReducer
});
