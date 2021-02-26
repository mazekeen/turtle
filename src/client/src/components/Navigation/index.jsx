import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.scss';

function Navigation(props) {
    return (
        <Navbar fixed='top' className={'navigation ' + props.className || ''}>
            <Navbar.Brand>
                <Link to="/">
                    <img
                        alt="logo"
                        src='/logo.png'
                        width="35"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    <p className="navigation-brand-text">Turtle</p>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text >
                    <Link to="/logout" style={{ color:'white', fontFamily: 'Raleway-Medium'}}>Lucia Mercator</Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
