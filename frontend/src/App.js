import './styles/css/Apps.css';
import './styles/css/clear.css';
import React from 'react';
import Portfolio from './pages/portfolio';
import WorkDetails from './pages/workDetails';
import HomePage from './pages/homepage';
import Nav from './components/nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <div className="wd-1200">
            <Nav />
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
