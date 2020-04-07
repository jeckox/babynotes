import React,{Fragment} from 'react';
import { withRouter } from "react-router-dom";
import {compose} from 'redux';
import { connect } from 'react-redux';
import { newPoop, fetchPoops } from '../../actions/poopsActions';
import LayoutPoops from './LayoutPoops';
/*
	mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    newPoop: ( info ) => dispatch( newPoop( info ) ),
    fetchPoops: ( id ) => dispatch( fetchPoops( id ) )
});
/*
	mapStateToProps
*/
const mapStateToProps = (state) => {
	return {
        actualBaby: state.babiesReducer.allBabies[state.babiesReducer.actualBaby],
        poops: state.poopsReducer.poops,
        allPoops: state.poopsReducer.allPoops 
	}
};
class PoopView extends React.Component {
    componentDidMount(){
		this.props.fetchPoops(this.props.actualBaby.idBaby);
	}
    addPoop(info){
		this.props.newPoop({
            ...info,
            baby: this.props.actualBaby.idBaby
        });
	}
    render() {
        const {actualBaby,poops,allPoops} = this.props;
        const addPoop = this.addPoop.bind(this);
        return(
            <Fragment>
                <LayoutPoops
                    poops={poops}
                    allPoops={allPoops}
					theBaby={actualBaby}
					addPoop={addPoop}
				/>
            </Fragment>
        );
    }
}

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(PoopView);