import React,{Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import {utcToZonedTime} from 'date-fns-tz';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BabyForm from './../Commons/Form';
import {validate, formFields} from './../Forms/FoodForm.js';

const useStyles = makeStyles(theme => ({
	container2:{
		textAlign: 'center',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
	},
	cardEl:{
		textAlign: 'center',
		margin: '0 auto'
	},
	centerEl:{
		textAlign: 'center',
		margin: '0 auto'
	},
	large: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		margin: 'auto',
		marginTop: theme.spacing(3)
	},
	add:{
		marginTop: theme.spacing(4),
		marginBottom: '-' + theme.spacing(2) + 'px'
	},
	activeBaby:{
		border:'1px solid',
		borderColor: theme.palette.secondary.light
	},
	icon:{
		color:theme.palette.error.contrastText
	}
}));
const LayoutBaby = ({
	  theBaby
	}) => {
	const classes = useStyles();
	const convertDate = (dateToTransform, plus = 0) => {
		const date = new Date(dateToTransform);
		const weekDays = [
			"Domingo",
			"Lunes",
			"Martes",
			"Miércoles",
			"Jueves",
			"Viernes",
			"Sabado"
		];
		const timeZone = "America/Chicago";
		const zonedDate = utcToZonedTime(date, timeZone);
		let hrs = (zonedDate.getHours() + parseInt(plus));
		let hrsRounded = (hrs > 12 ? (hrs - 12) : hrs);
		hrsRounded = hrsRounded > 1 ? ` las ${hrsRounded} horas` : `la ${hrsRounded} `;
		let speach = `A ${hrsRounded} con ${zonedDate.getMinutes()} minutos del día ${weekDays[zonedDate.getDay()]} - ${zonedDate}`;
		return speach;
	};
	return (
		<Fragment>
			<CssBaseline />
			<Container component="main" className={classes.container2}>
				<Grid container  spacing={2}>
                    <Grid item  xs={12} lg={4}>
                        <Card >
                        	<CardContent>
                        		<Typography variant="h5" component="h2">
                                    La última comida de {theBaby.name} fue de {theBaby.lastFood.quantity} onzas
                        		</Typography>
                        		<Typography color="textSecondary">
                        			{theBaby.lastFood.date && convertDate(theBaby.lastFood.date)}
                        		</Typography>
                        	</CardContent>
                        </Card>
					</Grid>
                    <Grid item  xs={12} lg={4}>
                        <Card >
                        	<CardContent>
                        		<Typography variant="h5" component="h2">
                        			La última extracción de {theBaby.name} fue de {theBaby.lastExtraction.quantity} onzas
                        		</Typography>
                        		<Typography color="textSecondary">
                        			{theBaby.lastExtraction.date && convertDate(theBaby.lastExtraction.date)}
                        		</Typography>
                        	</CardContent>
                        </Card>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
};
export default LayoutBaby;