import React from 'react';
import './style.scss';

function Menu({children}) {
    return (
        <div className="layout-menu">
            {children}
        </div>
    )
}
function Navigation({children}) {
    return (
        <div className="layout-navigation">
            {children}
        </div>
    )
}
function Content({children}) {
    return (
        <div className="layout-content">
            {children}
        </div>
    )
}

function Layout({children}) {

    return (
        <div className="layout">
            {children}
        </div>
    );
}

Layout.Menu = Menu;
Layout.Navigation = Navigation;
Layout.Content = Content;

export default Layout;
