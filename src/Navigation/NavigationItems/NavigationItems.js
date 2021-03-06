import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import classes from './NavigationItems.css';


 const navigationItems = ()=> (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' Active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
 );

 export default navigationItems;