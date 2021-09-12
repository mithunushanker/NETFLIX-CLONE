import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Mobile from './Mobile';
import { HashRouter as Router, Route,Switch } from "react-router-dom";


ReactDOM.render(
  
    <Router><Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/mobile" component={Mobile}/>
      
      </Switch></Router>
  
  ,document.getElementById('root')
);


