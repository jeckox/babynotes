import React from 'react';
import {
	Radios,
	TimePicker
} from 'mui-rff';
// Picker
import DateFnsUtils from '@date-io/date-fns';
export const validate = values => {
	const errors = {};
	if (!values.poopOrPee) {
		errors.poopOrPee = 'Required';
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
				<Radios
				 label="Poop or Pee"
				name="poopOrPee"
					formControlProps={{ margin: 'none' }}
					radioGroupProps={{ row: true }}
					data={[
					{ label: 'Poop', value: 'poop' },
					{ label: 'Pee', value: 'pee' },
					{ label: 'Both', value: 'both' },
				]}
				/>
			)
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