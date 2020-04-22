import React, { useCallback } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Notes from './Notes';
// import LoginForm from './LoginForm';
import Login from './Login';
import RegisterForm from './RegisterForm';
import PrivateRoute from './PrivateRoute';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import fire from '../firebaseConfig';

import useFirebaseUser from './../Hooks/useFirebaseUser';

function App(props) {
  const [userData, reset] = useFirebaseUser(fire.auth);
  const loading = userData.loading;
  const user = userData.user;
  const isAuthenticated = !!user;

  const history = useHistory();

  const login = useCallback(
    (email, password, rememberMe) => {
      reset();
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
    },
    [reset, history]
  );

  const register = useCallback(
    (email, password, rememberMe) => {
      reset();
      const persistance = rememberMe
        ? fire.persistanceLocal
        : fire.persistanceSession;

      fire.auth
        .setPersistence(persistance)
        .then(() => {
          fire.auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('Register successful!');
              history.push('/');
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [reset, history]
  );

  const googleLogin = useCallback(() => {
    console.log('Here Google');
    reset();
    fire.auth
      .signInWithPopup(fire.googleAuthProvider)
      .then(() => {
        console.log('Register successful!');
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reset, history]);

  const logout = useCallback(() => {
    fire.auth
      .signOut()
      .then(() => {
        console.log('Logout has been successful');
        reset();
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reset, history]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          WriteNotes
        </Navbar.Brand>
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
          <Login onLogin={login} onGoogleLogin={googleLogin} />
        </Route>
        <Route path="/register">
          <RegisterForm onRegister={register} />
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
          user={user}
          db={fire.db}
          path="/notes/:noteId?"
          component={Notes}
        />
      </Switch>
    </div>
  );
}

export default App;
