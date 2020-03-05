import React, { Component } from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <div className={classes.Content}>
                <SideDrawer open={this.state.showSideDrawer} clicked={this.sideDrawerCloseHandler} />
                <Toolbar clicked={this.sideDrawerToggleHandler} />
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;