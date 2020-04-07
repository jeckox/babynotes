import React from 'react';
import { Form } from 'react-final-form';
import {
  Radios,
  TimePicker
} from 'mui-rff';
import {
  Grid,
  Button
} from '@material-ui/core';
// Picker
import DateFnsUtils from '@date-io/date-fns';

const validate = values => {
  const errors = {};
  if (!values.poopOrPee) {
	errors.poopOrPee = 'Required';
  }
  if (!values.date) {
	errors.date = 'Required';
  }
  return errors;
};

const formFields = [
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
const NewPoopForm = ({savePoop}) =>{
	return (
		<div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
		  <Form
			onSubmit={savePoop}
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
export default NewPoopForm;