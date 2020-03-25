import React,{Fragment} from 'react';
import { withRouter } from "react-router-dom";

class FoodView extends React.Component {
    render() {
        return(
            <Fragment>
                <h1>Food View</h1>
            </Fragment>
        );
    }
}

export default withRouter(FoodView)