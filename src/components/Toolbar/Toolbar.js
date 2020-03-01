import React from 'react'
import Logo from '../Logo/Logo';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <dvi className={classes.Toolbar}>
        <div>Menu</div>
       <Logo />
        <nav>
            ...
        </nav>
    </dvi>
);

export default toolbar;