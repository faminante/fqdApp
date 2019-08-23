import React, {Component} from 'react';
import {Navbar,Nav,Button,FormControl,Form} from 'react-bootstrap';
class Header extends Component {
    constructor(){
        super();       
    }
    render() {
        return (
            <Navbar bg="light" fixed="top">
                <Navbar.Brand href="#home">FAMINANTE</Navbar.Brand>
                <Nav className="mr-sm-2 nav-right">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav className='navbar-nav navbar-right'>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                      </Nav.Link>
                </Nav>
                
              </Navbar>
             
        );
    }
}
export default Header;

