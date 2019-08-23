import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));
serviceWorker.unregister();
