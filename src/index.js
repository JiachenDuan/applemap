import React, { Component } from 'react';
import {render} from 'react-dom';
import App from './App';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

var destination = document.querySelector("#root");
ReactDOM.render(
  // setup router
  <Router history = {hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/zoom/:zoom/lat/:lat/lng/:lng" component={App}/>
  </Router>,
  destination
)
