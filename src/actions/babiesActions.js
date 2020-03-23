/* 
  src/actions/simpleAction.js
*/
import * as A from  './../constants/babiesActions';
import {babyRef} from '../firebase';



//   export const newFood = () => async dispatch => {
// 	const dates = new Date();
// 	foodRef.push().set({
// 		"baby" : "0",
// 		"date": dates.toString()
// 	});
// 	console.log(foodRef.toString());
//   };
//   export const completeToDo = completeToDo => async dispatch => {
// 	babyRef.child(completeToDo).remove();
//   };
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
}