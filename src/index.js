import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/Main';
import Login from './components/LoginComponent';

// Needed for onTouchTap
injectTapEventPlugin();

// Routes declaration
const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/login" component={Login}></Route>
  </Router>
);

// Render the main component into the dom
ReactDOM.render(Routes, document.getElementById('app'));
