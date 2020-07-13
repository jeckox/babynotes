import React,{Fragment} from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import LayoutBaby from './LayoutBaby';

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
                <LayoutBaby theBaby={actualBaby}></LayoutBaby>
            </Fragment>
        );
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(BabyView);