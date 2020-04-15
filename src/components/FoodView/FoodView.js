import React,{Fragment} from 'react';
import { withRouter } from "react-router-dom";
import {compose} from 'redux';
import { connect } from 'react-redux';
import { newFood, fetchFoods } from '../../actions/foodActions';
import LayoutFood from './LayoutFood'
/*
	mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    newFood: ( info ) => dispatch( newFood( info ) ),
    fetchFoods: ( id ) => dispatch( fetchFoods( id ) )
});
/*
	mapStateToProps
*/
const mapStateToProps = (state) => {
	return {
        actualBaby: state.babiesReducer.allBabies[state.babiesReducer.actualBaby],
        foods: state.foodReducer.foods,
        allFoods: state.foodReducer.allFoods 
	}
};
class FoodView extends React.Component {
    componentDidMount(){
		this.props.fetchFoods(this.props.actualBaby.idBaby);
	}
    addFood(info){
		this.props.newFood({
            ...info,
            baby: this.props.actualBaby.idBaby
        });
	}
    render() {
        const {actualBaby,foods,allFoods} = this.props;
        const addFood = this.addFood.bind(this);
        return(
            <Fragment>
                <LayoutFood
                    foods={foods}
                    allFoods={allFoods}
					theBaby={actualBaby}
					addFood={addFood}
				/>
            </Fragment>
        );
    }
}

export default compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(FoodView);