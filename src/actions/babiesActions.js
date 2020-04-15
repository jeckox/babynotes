import * as A from  './../constants/babiesActions';
import {babyRef} from '../firebase';

export const fetchBabies = () => async dispatch => {
	babyRef.on("value", snapshot => {
		dispatch({
			type: A.GET_BABIES_SUCCESS,
			payload: snapshot.val()
		});
	});
};
export const newBaby = ( info ) => async dispatch => {
	const {name, lastname, birthday } = info;
	const refBaby = babyRef.push();
	refBaby.set({
		name,
		lastname,
		"birthday":birthday.toDateString(),
		"idBaby":refBaby.key,
		"poops": [],
		"lastFood": "",
		"lastPoop": "",
		"food": [],
		"reminders": []
	})
	.then(function() {
		dispatch({
			type: A.NEW_BABY_SUCCESS
		});
	})
	.catch(function(error) {
		dispatch({
			type: A.NEW_BABY_FAILED,
			payload: error
		});
	});
};
export const selectBaby = ( theBaby ) => dispatch =>{
	dispatch({
		type: A.SELECT_BABY,
		payload: theBaby
	});
};
export const updateLastFood = ( actualBaby, lastFood ) => dispatch =>{
	babyRef.child(actualBaby).update({'lastFood': lastFood});
	dispatch({
		type: A.UPDATE_BABY_LASTFOOD
	});
};

export const updateLastPoop = ( actualBaby, lastPoop ) => dispatch =>{
	babyRef.child(actualBaby).update({'lastPoop': lastPoop});
	dispatch({
		type: A.UPDATE_BABY_LASTPOOP
	});
};