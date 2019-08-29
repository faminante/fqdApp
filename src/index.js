import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routes';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './views/resources/css/style.css';

ReactDOM.render(<Routing />, document.getElementById('root'));
serviceWorker.unregister();
