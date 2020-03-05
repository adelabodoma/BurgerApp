import React from 'react'
import classes from './SideDrawerToggle.css';

 const sideDrawerToggle = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.SideDrawerToggleHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
    )
}

export default sideDrawerToggle;