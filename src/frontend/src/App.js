import './App.css';
import './Apps.css';
import './clear.css';
import Nav from './components/nav'
import Portfolio from './components/portfolio'
import WorkDetails from './components/workDetails'
import HomePage from './components/homepage'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <div className="wd-1200">
            <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path='/portfolio' exact component={Portfolio}/>
              <Route path='/portfolio/:id' component={WorkDetails}/>
            </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
