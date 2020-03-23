import React,{Fragment} from 'react';
import { withRouter,Redirect } from "react-router-dom";
import {compose} from 'redux';
import { connect } from 'react-redux';
import { fetchBabies, newBaby, selectBaby } from '../../actions/babiesActions';
import LayoutBabies from './LayoutBabies';

/*
	mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
	fetchBabies: () => dispatch( fetchBabies() ),
	newBaby: ( info ) => dispatch( newBaby( info ) ),
	selectBaby: ( theBaby ) => dispatch( selectBaby( theBaby ) )
});
/*
	mapStateToProps
*/
const mapStateToProps = (state) => {
	return {
		babies: state.babiesReducer.babies,
		allBabies: state.babiesReducer.allBabies,
		actualBaby: state.babiesReducer.allBabies[state.babiesReducer.actualBaby]
	}
};

class BabiesView extends React.Component {
	componentDidMount(){
		this.props.fetchBabies();
	}
	addBaby(info){
		this.props.newBaby(info);
	}
	selectBaby(theBaby){
		this.props.selectBaby(theBaby);
	}
	render() {
		const {babies,allBabies,actualBaby} = this.props;
		const addBaby = this.addBaby.bind(this);
		const selectBaby = this.selectBaby.bind(this);
		return(
			<Fragment>
				<LayoutBabies
					babies={babies}
					allBabies={allBabies}
					theBaby={actualBaby}
					selectBaby={selectBaby}
					addBaby={addBaby}
				/>
				 {
                    actualBaby &&
                    <Redirect to="/dashboard" />
                }
			</Fragment>
		);
	}
}
export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(BabiesView);