import React from 'react';
import {
	TextField,
	TimePicker
} from 'mui-rff';
// Picker
import DateFnsUtils from '@date-io/date-fns';
export const validate = values => {
	const errors = {};
	if (!values.quantity) {
		errors.quantity = 'Required';
	}
	if (!values.date) {
		errors.date = 'Required';
	}
	return errors;
};

export const formFields = [
	{
		size: 12,
		field: (
		  <TextField
			type="number"
			label="Quantity"
			name="quantity"
			margin="none"
			min="1"
			max="10"
			required={true}
		  />
		),
	},
	{
		size: 12,
		field: (
			<TimePicker
				name="date"
				margin="normal"
				label="Select the time"
				dateFunsUtils={DateFnsUtils}
			/>
		),
	}
];