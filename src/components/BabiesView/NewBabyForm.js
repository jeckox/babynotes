import React from 'react';
import { Form } from 'react-final-form';
import {
  TextField,
  DatePicker
} from 'mui-rff';
import {
  Grid,
  Button
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';

const validate = values => {
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

const formFields = [
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
const NewBabyForm = ({saveBaby}) =>{
	return (
		<div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
		  <Form
			onSubmit={saveBaby}
			validate={validate}
			render={({ handleSubmit, reset, submitting, pristine, values }) => (
			  <form onSubmit={handleSubmit} noValidate>
				<Grid container alignItems="flex-start" spacing={2}>
					{formFields.map((item, idx) => (
					  <Grid item xs={item.size} key={idx}>
						{item.field}
					  </Grid>
					))}
					<Grid item style={{ marginTop: 16 }}>
					  <Button
						variant="contained"
						color="primary"
						type="submit"
						disabled={submitting}
					  >
						Save
					  </Button>
					</Grid>
				</Grid>
			  </form>
			)}
		  />
		</div>
	  );
}
export default NewBabyForm;