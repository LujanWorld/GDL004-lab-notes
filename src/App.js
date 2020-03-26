import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Notes from './Notes.js';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              MyNotes
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/My-notes'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/sign-in" component={LoginForm} />
          <Route path="/sign-up" component={SignUpForm} />
          <Route exact path="/My-notes" component={Notes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
