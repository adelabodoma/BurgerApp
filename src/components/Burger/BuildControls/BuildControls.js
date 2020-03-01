import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
    { label: "Salad", type: 'salad' },
    { label: "Meat", type: 'meat' },
    { label: "Bacon", type: 'bacon' },
    { label: "Cheese", type: 'cheese' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price  <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map((ctrl, i) => {
            return <BuildControl
                key={ctrl.label}
                Label={ctrl.label}
                added={() => props.addedIngredients(ctrl.type)}
                removed={() => props.removedIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        })}
        <button onClick={props.ordered} disabled={!props.canOrder} className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls;