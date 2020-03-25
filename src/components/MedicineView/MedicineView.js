import React,{Fragment} from 'react';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';

class MedicineView extends React.Component {
    render() {
        return(
            <Fragment>
                <h1>Medicine View</h1>
            </Fragment>
        );
    }
}

export default withRouter(MedicineView)