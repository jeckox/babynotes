import React from 'react';
import { withRouter } from "react-router-dom";
import Welcome from './Welcome';

class FirstView extends React.Component {
    render() {
        return(
            <Welcome></Welcome>
        );
    }
}

export default withRouter(FirstView)