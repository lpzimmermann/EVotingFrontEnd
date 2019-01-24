import React, { Component } from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import logo from '../../Img/logo.svg';

class NavigationBar extends Component {

    /**
     * Renders this component
     * @returns {any}
     */
    render() {

        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={logo} className="NavBar-Logo" alt="logo"/> E-Voting Client
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/polls">
                        Abstimmungen
                    </NavItem>
                    <NavItem eventKey={2} href="/createPoll">
                        Abstimmung erstellen
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default NavigationBar;