import React, {Component} from 'react';
import { Link} from 'react-router-dom'

class Home extends Component {
    constructor(){
        super();       
    }
    render() {
        return (
            <div className="background" key="full">
              
               <li><Link to={'/about'} className="nav-link"> About </Link></li>
            </div>
        );
    }
}
export default Home;

