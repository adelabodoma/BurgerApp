import React from 'react'
import Logo from '../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import SideDrawerToggle from '../../Navigation/SideDrawer/SideDrawerToggle/SideDrawerToggle';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <SideDrawerToggle SideDrawerToggleHandler={props.clicked} />

        {/* <div onClick={props.clicked}>Menu</div> */}
       <Logo />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </div>
);

export default toolbar;