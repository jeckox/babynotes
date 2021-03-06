import React,{Fragment} from 'react';
import { withRouter,Redirect } from "react-router-dom";
import {compose} from 'redux';
import { connect } from 'react-redux';
import LayoutTabs from './LayoutTabs';
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
                    <LayoutTabs actualBaby={actualBaby} />
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