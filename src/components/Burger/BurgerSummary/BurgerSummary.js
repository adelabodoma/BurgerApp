import React from 'react';
import Aux from '../../../hoc/Ax';
import Button from '../../../UI/Button/Button';

const burgerSummary = (props) => {
    const ingredientsSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}: </span>{props.ingredients[igKey]}</li>
        });
    return (
        <Aux>
            <p>Your Burger Order</p>
            <h3>A delicious burger with the following ingredients: </h3>
            <ul>
                {ingredientsSummery}
            </ul>
            <p>Continue to checkout?</p>
            <Button clicked={props.cancel} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.continue} btnType='Success'>CONTINUE</Button>
        </Aux>
    );
}

export default burgerSummary;