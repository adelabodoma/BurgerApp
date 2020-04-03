import React from 'react'
import Burger from '../../Burger/Burger';
import Button from '../../../UI/Button/Button';
import classes from './CheckoutSummery.css'
function CheckoutSummery(props) {
    return (
        <div className={classes.CheckoutSummery}>
            <h1>We Hope It tastes Well!</h1>
            <Burger ingredients={props.ingredients} />

            <div>
                <Button  btnType="Danger">CANCEL</Button>
                <Button  btnType="Success">cONTINUE</Button>
            </div>
        </div>
    )
}

export default CheckoutSummery
