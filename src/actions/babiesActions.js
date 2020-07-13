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
	const {name, lastname, birthday, extractionlapse } = info;
	const refBaby = babyRef.push();
	refBaby.set({
		name,
		lastname,
		extractionlapse,
		"birthday":birthday.toDateString(),
		"idBaby":refBaby.key,
		"lastFood": "",
		"lastPoop": "",
		"poops": [],
		"food": [],
		"extractions":[],
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
export const updateLastFood = ( lastFood ) => dispatch =>{
	const {baby,idFood} = lastFood;
	babyRef.child(baby).update({'lastFood': lastFood});
	babyRef.child(baby).child("foods").push().set(idFood);
	dispatch({
		type: A.UPDATE_BABY_LASTFOOD
	});
};

export const updateLastPoop = ( lastPoop ) => dispatch =>{
	const {baby, idPoop} = lastPoop;
	babyRef.child(baby).update({'lastPoop': lastPoop});
	babyRef.child(baby).child("poops").push().set(idPoop);
	dispatch({
		type: A.UPDATE_BABY_LASTPOOP
	});
};

export const updateLastExtraction = ( lastExtraction ) => dispatch =>{
	const {baby,idExtraction} = lastExtraction;
	babyRef.child(baby).update({'lastExtraction': lastExtraction});
	babyRef.child(baby).child("extractions").push().set(idExtraction);
	dispatch({
		type: A.UPDATE_BABY_LASTEXTRACTION
	});
};