/* 
  src/reducers/poopsReducer.js
*/
import * as A from './../constants/poopsActions.js';
import _ from 'lodash';
const initialState = {
	poops: [],
	allPoops: {}
};
export default (state = initialState, action) => {
	switch (action.type) {
		case A.GET_POOPS_SUCCESS:
			const poops = _.keysIn(action.payload);
			const allPoops = action.payload;
			return {
				...state,
				poops,
				allPoops
			}
		default:
			return state
	}
}