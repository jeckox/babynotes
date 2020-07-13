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
	errors.name = 'Please fill your name';
  }
  if (!values.lastname) {
	errors.lastname = 'Please fill your lastname';
  }
  if (!values.extractionlapse) {
	errors.extractionlapse = 'Please fill your extraction lapse, like 3';
  }
  if (!values.birthday) {
	errors.birthday = 'Please fill your birthday';
  }
  return errors;
};

export const formFields = [
  {
	size: 4,
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
	size: 4,
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
	size: 4,
	field: (
	  <TextField
		label="Extraction Time"
		name="extractionlapse"
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