import React,{Fragment} from 'react';
import { withRouter } from "react-router-dom";
class RemindersView extends React.Component {
    render() {
        return(
            <Fragment>
                <h1>Reminders View</h1>
            </Fragment>
        );
    }
}

export default withRouter(RemindersView)