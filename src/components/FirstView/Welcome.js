import React,{Fragment} from 'react';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	container:{
		textAlign: 'center'
	},
	paper: {
		marginTop: theme.spacing(10),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '.25rem',
		background: 'linear-gradient(180deg, #a976d4 0%, #4d4e7e 100%)'
	},
	icon:{
		fontSize:'5em',
		marginTop: theme.spacing(2),
		color:theme.palette.primary.contrastText,
		marginBottom: theme.spacing(1)
	},
	titleApp: {
	  color:theme.palette.primary.contrastText,
	  marginBottom: theme.spacing(2)
	},
	button:{
		marginTop: theme.spacing(4),
		textDecoration: 'none',
		background:theme.palette.primary.contrastText
	},
	textApp: {
		color:theme.palette.primary.contrastText,
		marginBottom: theme.spacing(2)
	}
  }));

  const Welcome = () => {
	const classes = useStyles();
	React.useEffect(() => {
		loadCSS(
		  'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
		  document.querySelector('#font-awesome-css'),
		);
	  }, []);
	return (
		<Fragment>
			<CssBaseline />
			<Container component="main" className={classes.container} maxWidth="xs">
				<Paper elevation={5} className={classes.paper}>
				<ChildCareIcon className={classes.icon}></ChildCareIcon>
					<Typography component="h1" variant="h6" className={classes.titleApp}>
						Baby Notes
					</Typography>
				</Paper>
				<Button variant="outlined" className={classes.button} component={Link} to='/babies' color="secondary" disableElevation size="large">
					Bienvenid@
				</Button>
			</Container>
		</Fragment>
	);
  };
  export default Welcome;