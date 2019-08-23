import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <header id="header">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Other
                    </li>
                </ul>
            </header>
        );
    }
}
export default Header;

