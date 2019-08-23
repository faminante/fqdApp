import React, {Component} from 'react';
import {Navbar,Nav,Button,NavDropdown,FormControl,Form} from 'react-bootstrap';
class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
                <Navbar.Brand href="#home">FAMINANTE</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    
                  </Nav>
                  <Nav>
                    <Nav.Link href='/'>Accueil</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                   
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

        );
    }
}
export default Header;
