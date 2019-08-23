import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class Layout extends Component {
    constructor(){
        super();       
    }
    render() {
        return (
            <div className="background" key="full">
                <Header />
                <div className="container-fluid">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Layout;

