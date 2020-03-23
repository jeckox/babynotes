import React,{Fragment} from 'react';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';

class FoodView extends React.Component {
    render() {
        return(
            <Fragment>
                <h1>Food View</h1>
                <Link to='/dashboard'>Dashboard</Link>
            </Fragment>
        );
    }
}

export default withRouter(FoodView)