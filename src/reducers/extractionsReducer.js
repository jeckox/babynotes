/* 
  src/reducers/extractionsReducer.js
*/
import * as A from '../constants/extractionsActions.js';
import _ from 'lodash';
const initialState = {
	extractions: [],
	allExractions: {}
};
export default (state = initialState, action) => {
	switch (action.type) {
		case A.GET_EXTRACTIONS_SUCCESS:
			const extractions = _.keysIn(action.payload).reverse();
			const allExractions = action.payload;
			return {
				...state,
				extractions,
				allExractions
			}
		default:
			return state
	}
}