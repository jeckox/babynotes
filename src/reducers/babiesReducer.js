/* 
  src/reducers/babiesReducer.js
*/
import * as A from './../constants/babiesActions';
import _ from 'lodash';
const initialState = {
    babies: [],
    allBabies: {},
    actualBaby: ""
};
export default (state = initialState, action) => {
    switch (action.type) {
        case A.GET_BABIES_FAILED:
            return {
                ...state,
                babies: [],
                allBabies: {},
                actualBaby: ""
            }
        case A.GET_BABIES_SUCCESS:
            const babies = _.keysIn(action.payload);
            const allBabies = action.payload;
            return {
                ...state,
                babies,
                allBabies
            }
        case A.SELECT_BABY:
            return {
                ...state,
                actualBaby: action.payload
            }
        default:
            return state
    }
}