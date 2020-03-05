import React from 'react'
import classes from './SideDrawer.css'
import Logo from '../../components/Logo/Logo';
import Aux from '../../hoc/Auxiliary/Ax';
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} closeHandler={props.clicked} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>

        </Aux>
    );
};

export default sideDrawer;