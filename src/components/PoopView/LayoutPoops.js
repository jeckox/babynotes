import React,{Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Avatar from '@material-ui/core/Avatar';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewPoopForm from './NewPoopForm';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
	container2:{
		textAlign: 'center',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
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

  const LayoutPoops = ({
	  poops,
	  allPoops,
	  addPoop
	}) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const savePoop = ( babe ) => {
		addPoop(babe);
		setOpen(false);
	}
	return (
		<Fragment>
			<CssBaseline />
			<Container component="main" className={classes.container2}>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
					<TableRow>
						<TableCell>Poop or Pee</TableCell>
						<TableCell align="right">Time</TableCell>
					</TableRow>
					</TableHead>
					<TableBody>
					{poops.map(poop => (
						<TableRow key={allPoops[poop].idPoop}>
						<TableCell component="th" scope="row">
							{allPoops[poop].poopOrPee}
						</TableCell>
						<TableCell align="right">{allPoops[poop].date}</TableCell>
						</TableRow>
					))}
					</TableBody>
				</Table>
				</TableContainer>
				<Paper>
					<Fab color="primary" aria-label="add" onClick={handleClickOpen} className={classes.add}>
						<AddIcon />
					</Fab>
					<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
						<DialogTitle id="form-dialog-title">Add New Poop</DialogTitle>
						<DialogContent>
							<NewPoopForm savePoop={savePoop}/>
						</DialogContent>
					</Dialog>
				</Paper>
			</Container>
		</Fragment>
	);
  };
  export default LayoutPoops;