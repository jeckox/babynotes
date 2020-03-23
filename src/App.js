import React from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FirstView from './components/FirstView/FirstView';
import BabiesView from './components/BabiesView/BabiesView';
import DashboardView from './components/DashboardView/DashboardView';
import FoodView from './components/FoodView/FoodView';
import PoopView from './components/PoopView/PoopView';
import RemindersView from './components/RemindersView/RemindersView';

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'Roboto',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#4d4e7e',
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary:{
			main:'#a976d4'
		},
		info:{
			main:'#4e9cff'
		},
		success:{
			main:'#38cc8b'
		},
		error:{
			main: '#dc5d6b'
		},
		warning:{
			main:'#ffc61c'
		}
	},
});

function AppRouter() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Route path="/" exact component={FirstView} />
				<Route path="/babies" exact component={BabiesView} />
				<Route path="/dashboard" exact component={DashboardView} />
				<Route path="/food" exact component={FoodView} />
				<Route path="/poop" exact component={PoopView} />
				<Route path="/reminders" exact component={RemindersView} />
			</Router>
		</ThemeProvider>
	);
}
export default AppRouter;