import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import Layout from './layout/layout';
import Home from './views/homes';
import About from './views/about';
import NotFoundPage from './views/404/notfoundpage';
function Routing() {
  return (
    <Layout>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                 /*
                   *     all routing 
                 */
                 
                 
                /********************************404 Page******************************/
                <Route path="*" component={NotFoundPage} />
             </Switch>
        </Router>
    </Layout>
  );
}
export default Routing;
