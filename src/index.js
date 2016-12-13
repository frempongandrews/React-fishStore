import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StorePicker from './Components/StorePicker';
import NotFound from './Components/NotFound';
import { Router, Route, browserHistory } from 'react-router';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={StorePicker}/>
        <Route path="/store/:storeId" component={App} />
        <Route path="*" component={NotFound}/>
    </Router>
);


ReactDOM.render(
  routes,
  document.getElementById('root')
);
