import * as A from  '../constants/extractionsActions';
import {extractionRef} from '../firebase';
import {updateLastExtraction} from '../actions/babiesActions';

export const fetchExtractions = ( id ) => async dispatch => {
	extractionRef.orderByChild("baby").equalTo(id).on("value", function(snapshot) {
		dispatch({
			type: A.GET_EXTRACTIONS_SUCCESS,
			payload: snapshot.val()
		});
	});
};
export const newExtraction = ( info ) => async dispatch => {
	const {date, quantity, baby } = info;
	const refExtraction = extractionRef.push();
	const lastExtraction = {
		date : date.toString(),
		quantity,
		baby,
		"idExtraction": refExtraction.key
	};
	refExtraction.set(lastExtraction)
	.then(function() {
		dispatch({
			type: A.NEW_EXTRACTION_SUCCESS
		});
		dispatch(updateLastExtraction(lastExtraction));
	})
	.catch(function(error) {
		dispatch({
			type: A.NEW_EXTRACTION_FAILED,
			payload: error
		});
	});
};