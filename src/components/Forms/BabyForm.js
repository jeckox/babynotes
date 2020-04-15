import React from 'react';
import {
  TextField,
  DatePicker
} from 'mui-rff';
// Picker
import DateFnsUtils from '@date-io/date-fns';

export const validate = values => {
  const errors = {};
  if (!values.name) {
	errors.name = 'Required';
  }
  if (!values.lastname) {
	errors.lastName = 'Required';
  }
  if (!values.birthday) {
	errors.birthday = 'Required';
  }
  return errors;
};

export const formFields = [
  {
	size: 6,
	field: (
	  <TextField
		label="First Name"
		name="name"
		margin="none"
		required={true}
	  />
	),
  },
  {
	size: 6,
	field: (
	  <TextField
		label="Last Name"
		name="lastname"
		margin="none"
		required={true}
	  />
	),
  },
  {
	size: 12,
	field: (
	  <DatePicker
		disableFuture={true}
		name="birthday"
		margin="normal"
		label="Birthday"
		dateFunsUtils={DateFnsUtils}
	  />
	),
  }
];