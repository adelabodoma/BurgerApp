import React from 'react';
import Aux from '../../../hoc/Auxiliary/Ax';
import Button from '../../../UI/Button/Button';

const burgerSummary = (props) => {
    const ingredientsSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}: </span>{props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummery}
            </ul>
            <p><strong>Total Price {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancel} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.continue} btnType='Success'>CONTINUE</Button>
        </Aux>
    );
}

export default burgerSummary;