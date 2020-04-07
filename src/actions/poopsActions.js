import * as A from  './../constants/poopsActions';
import {poopRef} from '../firebase';

export const fetchPoops = ( id ) => async dispatch => {
	poopRef.orderByChild("baby").equalTo(id).on("value", function(snapshot) {
		dispatch({
			type: A.GET_POOPS_SUCCESS,
			payload: snapshot.val()
		});
	});
};
export const newPoop = ( info ) => async dispatch => {
	const {date, poopOrPee, baby } = info;
	const refPoop = poopRef.push();
	refPoop.set({
		date : date.toString(),
		poopOrPee,
		baby,
		"idPoop": refPoop.key
	})
	.then(function() {
		dispatch({
			type: A.NEW_POOP_SUCCESS
		});
	})
	.catch(function(error) {
		dispatch({
			type: A.NEW_POOP_FAILED,
			payload: error
		});
	});
};