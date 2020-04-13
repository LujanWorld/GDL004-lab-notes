import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import firebase from 'firebase';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Notes from './Components/Notes';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import PrivateRoute from './Components/PrivateRoute';

import Navbar from 'react-bootstrap/Navbar';

import useFirebaseUser from './Hooks/useFirebaseUser';

function App(props) {
  let user = useFirebaseUser();

  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">WriteNotes</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/login">Logout</Nav.Link>
              <Nav.Link href="/login">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <PrivateRoute
            exact
            isAuthenticated={!!user}
            path="/notes"
            component={Notes}
          />
          <PrivateRoute
            exact
            isAuthenticated={!!user}
            path="/notes/:noteId?"
            component={Notes}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
