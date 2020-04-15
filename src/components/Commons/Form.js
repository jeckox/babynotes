import React from 'react';
import { Form } from 'react-final-form';
import {
	Grid,
	Button
} from '@material-ui/core';

const BabyForm = ({onSubmit, validate, formFields}) =>{
	return (
		<div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
			<Form
			onSubmit={onSubmit}
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
export default BabyForm;