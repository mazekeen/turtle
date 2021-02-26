import React from 'react';
import './style.scss';

import Menu from '../Menu';
import Navigation from '../Navigation';
import Statistics from '../Statistics';


function Layout() {
    return (
        <div className="layout">
            <Navigation className="layout-navigation" />
            <Menu className="layout-menu"/>
            <div className="layout-content">
                <Statistics/>
            </div>
            {/*<div className="layout-content">
                {props.children}
            </div>
            */}
        </div>
    );
}

export default Layout;
