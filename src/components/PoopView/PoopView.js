import React,{Fragment} from 'react';
import { withRouter } from "react-router-dom";

class PoopView extends React.Component {
    render() {
        return(
            <Fragment>
                <h1>Poop View</h1>
            </Fragment>
        );
    }
}

export default withRouter(PoopView)