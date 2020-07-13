import * as A from  './../constants/poopsActions';
import {poopRef} from '../firebase';
import {updateLastPoop} from '../actions/babiesActions';

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
	const lastPoop = {
		date : date.toString(),
		poopOrPee,
		baby,
		"idPoop": refPoop.key
	};
	refPoop.set(lastPoop)
	.then(() => {
		dispatch({
			type: A.NEW_POOP_SUCCESS
		});
	})
	.then(()=>{
		dispatch(updateLastPoop(lastPoop));
	})
	.catch(function(error) {
		dispatch({
			type: A.NEW_POOP_FAILED,
			payload: error
		});
	});
};