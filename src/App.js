import React from 'react';

import './App.css';

import Login from './Components/Login';
import Header2 from './Front/Header2';
import About from './Front/About';
import Register from './Front/Register';
import Issue from './Components/Issue'
import Header from './Components/Header'
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Header2} />
      <Route exact path='/Header' component={Header} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/About' component={About} />
          <Route  exact path='/Register' component={Register} />
          <Route  exact path='/issue' component={Issue} />
         
    </Switch>
</Router>
  );
}

export default App;
