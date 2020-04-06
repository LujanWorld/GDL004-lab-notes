import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Notes from './Notes';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import PrivateRoute from './PrivateRoute';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import fire from '../firebaseConfig';

import useFirebaseUser from './../Hooks/useFirebaseUser';

function App(props) {
  const userData = useFirebaseUser(fire.auth);
  const loading = userData.loading;
  const user = userData.user;
  const isAuthenticated = !!user;

  const history = useHistory();

  function login(email, password, rememberMe) {
    const persistance = rememberMe
      ? fire.persistanceLocal
      : fire.persistanceSession;

    fire.auth
      .setPersistence(persistance)
      .then(() => {
        fire.auth
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('Login successful!');
            history.push('/');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    fire.auth
      .signOut()
      .then(() => {
        console.log('Logout has been successful');
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">WriteNotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {!isAuthenticated && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {!isAuthenticated && (
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
            )}
            {isAuthenticated && (
              <Nav.Link as={Link} to="/logout">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/login">
          <LoginForm onLogin={login} />
        </Route>
        <Route path="/logout" render={logout} />

        <PrivateRoute
          exact
          isAuthenticated={isAuthenticated}
          isLoading={loading}
          path="/"
          component={Notes}
        />
        <PrivateRoute
          exact
          isAuthenticated={isAuthenticated}
          isLoading={loading}
          path="/notes/:noteId?"
          component={Notes}
        />
      </Switch>
    </div>
  );
}

export default App;
