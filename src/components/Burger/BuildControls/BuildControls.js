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
        {controls.map((ele, i) => {
            return <BuildControl key={ele.label} Label={ele.label} added={() => props.addedIngredients(ele.type)} removed={() => props.removedIngredient(ele.type)} />
        })}
    </div>
);

export default buildControls;