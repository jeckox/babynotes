import React,{Fragment} from 'react';
import { withRouter,Redirect } from "react-router-dom";
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  
})

/* 
 * mapStateToProps
*/
const mapStateToProps = (state) => {
	return {
		actualBaby: state.babiesReducer.allBabies[state.babiesReducer.actualBaby]
	}
};
class DashboardView extends React.Component {
    render() {
        const {actualBaby} = this.props;
        return(
            <Fragment>
                { (actualBaby) && 
                <Fragment>
                    <h1>Dashboard View</h1>
                    <p>of {this.props.actualBaby.name}</p>
                    <Link to='/food'>Food</Link>
                    <Link to='/poop'>Poop</Link>
                    <Link to='/reminders'>Reminders</Link>
                </Fragment> }
                {
                    (!actualBaby) &&
                    <Redirect to="/babies" />
                }
            </Fragment>
        );
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(DashboardView);