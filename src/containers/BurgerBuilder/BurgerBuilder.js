import React, { Component } from 'react'
import Aux from '../../hoc/Ax';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';



const INGREDIENTS_PRICE = {
    salad: 0.6,
    meat: 1.3,
    bacon: 1.1,
    cheese: 0.5
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 1,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 4
    }

    addIngredient = (type) => {
        let updateIngredients = { ...this.state.ingredients };
        updateIngredients[type] = updateIngredients[type] + 1;

        let updatePrice = this.state.totalPrice;
        updatePrice += INGREDIENTS_PRICE[type];

        this.setState({ ingredients: updateIngredients, totalPrice: updatePrice });
    }

    removeIngredient = (type) => {
        let updateIngredients = { ...this.state.ingredients };
        updateIngredients[type] = updateIngredients[type] - 1;

        let updatePrice = this.state.totalPrice;
        updatePrice -= INGREDIENTS_PRICE[type];

        if (updateIngredients[type] >= 0) {
            this.setState({ ingredients: updateIngredients, totalPrice: updatePrice });
        }

    }


    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addedIngredients={this.addIngredient} removedIngredient={this.removeIngredient} />
            </Aux>
        );
    }
}

export default BurgerBuilder;