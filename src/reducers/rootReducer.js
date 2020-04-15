import { combineReducers } from 'redux';
import babiesReducer from './babiesReducer';
import poopsReducer from './poopsReducer';
import foodReducer from './foodReducer';

export default combineReducers({
  babiesReducer,
  poopsReducer,
  foodReducer
});
