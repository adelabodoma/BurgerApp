import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Ax';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import BurgerSummary from '../../components/Burger/BurgerSummary/BurgerSummary';
import axios from '../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

const INGREDIENTS_PRICE = {
    salad: 0.6,
    meat: 1.3,
    bacon: 1.1,
    cheese: 0.5
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 0,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/ingredients.json')
        .then(response => {
            this.setState({ ingredients: response.data })
        }).catch(error => {
            this.setState({error: true});
        })
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
        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Adel",
                address: {
                    "name": "testets",
                    zipCode: '12345'
                },
                email: 'testtest@gmail.com'
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false });
            })

    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burgerSummery = null;

        let burger = this.state.error ? <p>ingredients can't be loaded!</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (<Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addedIngredients={this.addIngredient}
                    removedIngredient={this.removeIngredient}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    canOrder={this.state.totalPrice > 0} />
            </Aux>);

            burgerSummery = <BurgerSummary ingredients={this.state.ingredients}
                cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinueHandler}
                price={this.state.totalPrice} />
        }

        if (this.state.loading) {
            burgerSummery =  <Spinner />;
        }



        return (
            <Aux>
                <Modal show={this.state.purchasing} hide={this.purchaseCancelHandler}>
                    {burgerSummery}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);