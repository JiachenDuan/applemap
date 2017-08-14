import React, { Component } from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

render(
  <Router history = {hashHistory}>
        <Route path="/zoom/:zoom/lat/:lat/lon/:lon" component={App}/>
  </Router>

)

document.getElementById('app');
