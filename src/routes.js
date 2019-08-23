import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout/layout';
import Home from './views/homes';
function Routing() {
  return (
    <Layout>
        <Router>
            <Route path="/" name="home" component={Home}/>
        </Router>
    </Layout>
  );
}
export default Routing;
