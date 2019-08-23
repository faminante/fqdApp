import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
 
 import {Container} from 'react-bootstrap'
class Layout extends Component {
    constructor(){
        super();       
    }
    render() {
        return ( <div>
                <Header />
                    <Container>
                        {this.props.children}
                    </Container>
                <Footer/>
            </div>
        );
    }
}
export default Layout;

