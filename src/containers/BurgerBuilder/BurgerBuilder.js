import React, { Component } from 'react'
import Aux from '../../hoc/Ax';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';



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
            meat: 0,
            bacon: 0,
            cheese: 0
        },
        totalPrice: 0,
        purchasing: false
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

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert(1)
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} hide={this.purchaseCancelHandler}>
                    <BurgerSummary ingredients={this.state.ingredients}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addedIngredients={this.addIngredient}
                    removedIngredient={this.removeIngredient}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    canOrder={this.state.totalPrice > 0} />
            </Aux>
        );
    }
}

export default BurgerBuilder;