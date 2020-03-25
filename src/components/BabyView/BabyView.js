import React,{Fragment} from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

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

class BabyView extends React.Component {
    render() {
         const {actualBaby} = this.props;
        return(
            <Fragment>
                <h1>{actualBaby.name}</h1>
            </Fragment>
        );
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(BabyView);