import * as A from  './../constants/foodActions';
import {foodRef} from '../firebase';
import {updateLastFood} from '../actions/babiesActions';

export const fetchFoods = ( id ) => async dispatch => {
	foodRef.orderByChild("baby").equalTo(id).on("value", function(snapshot) {
		dispatch({
			type: A.GET_FOODS_SUCCESS,
			payload: snapshot.val()
		});
	});
};
export const newFood = ( info ) => async dispatch => {
	const {date, quantity, baby } = info;
	const refFood = foodRef.push();
	const lastFood = {
		date : date.toString(),
		quantity,
		baby,
		"idFood": refFood.key
	};
	refFood.set(lastFood)
	.then(function() {
		dispatch({
			type: A.NEW_FOOD_SUCCESS
		});
		dispatch(updateLastFood(lastFood));
	})
	.catch(function(error) {
		dispatch({
			type: A.NEW_FOOD_FAILED,
			payload: error
		});
	});
};