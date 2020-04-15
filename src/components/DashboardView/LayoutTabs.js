import React,{Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
// import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import FoodView from './../FoodView/FoodView';
import PoopView from './../PoopView/PoopView';
// import RemindersView from './../RemindersView/RemindersView';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import BabyView from './../BabyView/BabyView';
// import MedicineView from './../MedicineView/MedicineView';
import SwipeableViews from 'react-swipeable-views';


const useStyles = makeStyles(theme => ({
	tab: {
		flexGrow: 1
	},
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	}
}));

const LayoutTabs = ({actualBaby}) =>{
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	React.useEffect(() => {
		loadCSS(
		'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
		document.querySelector('#font-awesome-css'),
		);
	}, []);
	return (
		<Fragment>
			<Grid container>
					<Grid item xs={12} sm={12} lg={12}>
						<Paper square className={classes.tab}>
							<Tabs
								value={value}
								onChange={handleChange}
								variant="fullWidth"
								indicatorColor="secondary"
								textColor="secondary"
								aria-label="icon label tabs example"
							>
								<Tab 	icon={<Icon className="fa fa-user-circle" /> } 
										label={(!matches ? actualBaby.name : null)} 
								/>
								<Tab icon={<Icon className="fa fa-poo" /> } label={(!matches ? 'Poops' : null)}  />
								<Tab icon={<Icon className="fa fa-utensils" /> } label={(!matches ? 'Food' : null)} />
								{/* <Tab icon={<Icon className="fa fa-pills" /> } label={(!matches ? 'Medicine' : null)} />
								<Tab icon={<AccessAlarmsIcon />} label={(!matches ? 'Reminders' : null)} /> */}
							</Tabs>
						</Paper>
					</Grid>
					<Grid item xs={12} sm={12} lg={12}>
							<SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
	   										index={value}
											onChangeIndex={handleChange}>
									<BabyView  index={0}/>
									<PoopView index={1}/>
									<FoodView index={2}/>
									{/* <MedicineView index={3}/>
									<RemindersView index={4}/> */}
							</SwipeableViews>
					</Grid>
				</Grid>
		</Fragment>
	);
}

export default LayoutTabs;