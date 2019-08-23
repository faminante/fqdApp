import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routes';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './views/resources/css/style.css';


ReactDOM.render(<Routing />, document.getElementById('root'));
serviceWorker.unregister();
