/* 
  src/reducers/foodReducer.js
*/
import * as A from './../constants/foodActions.js';
import _ from 'lodash';
const initialState = {
	foods: [],
	allFoods: {}
};
export default (state = initialState, action) => {
	switch (action.type) {
		case A.GET_FOODS_SUCCESS:
			const foods = _.keysIn(action.payload);
			const allFoods = action.payload;
			return {
				...state,
				foods,
				allFoods
			}
		default:
			return state
	}
}