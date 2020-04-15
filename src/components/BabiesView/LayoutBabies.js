import React,{Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {validate, formFields} from './../Forms/BabyForm';
import BabyForm from './../Commons/Form';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	container:{
		textAlign: 'center'
	},
	large: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		margin: 'auto',
		marginTop: theme.spacing(3)
	},
	add:{
		marginTop: theme.spacing(4)
	},
	activeBaby:{
		border:'1px solid',
		borderColor: theme.palette.secondary.light
	},
	icon:{
		color:theme.palette.error.contrastText
	}
}));

const LayoutBabies = ({
	  babies,
	  allBabies,
	  theBaby,
	  addBaby,
	  selectBaby
	}) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const saveBaby = ( babe ) => {
		addBaby(babe);
		setOpen(false);
	}
	return (
		<Fragment>
			<CssBaseline />
			<Container component="main" className={classes.container}>
				<Grid container spacing={2}>
					{
						babies.map((element) => <Grid item xs={6} lg={3} key={allBabies[element].idBaby}>
						<Card className={theBaby && (allBabies[element].idBaby === theBaby.idBaby ? classes.activeBaby : null)}>
							<CardActionArea onClick={() => selectBaby(allBabies[element].idBaby) }>
								<Avatar alt={allBabies[element].name} src="/static/images/avatar/1.jpg" className={classes.large} />
								<CardContent>
									<Typography gutterBottom variant="h6" component="h2">
									{allBabies[element].name}
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
									{allBabies[element].birthday}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>)
					}
				</Grid>
				<Fab color="primary" aria-label="add" onClick={handleClickOpen} className={classes.add}>
					<AddIcon />
				</Fab>
				<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Add New Baby</DialogTitle>
					<DialogContent>
						<BabyForm onSubmit={saveBaby} validate={validate} formFields={formFields}/>
					</DialogContent>
				</Dialog>
			</Container>
		</Fragment>
	);
  };
  export default LayoutBabies;