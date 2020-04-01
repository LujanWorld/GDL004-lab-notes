import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from 'firebase';

import './App.css';
import Notes from './Notes.js';
import LoginForm from './Components/LoginForm';
import SignUpForm from './Components/SignUpForm';

function App(props) {
  const [userLoggeado, setUserLoggeado] = useState(false);

  useEffect(() => {
    const u = !!firebase.auth().currentUser;
    setUserLoggeado(u);
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUserLoggeado(!!user);
    });
    return unsubscribe;
  }, []);
  //add and delete notes
  // notesApp.push().set('test');
  // notesApp.child('-M3gOQ69uYcy9DUrBUn-').remove();
  // notesApp.on('value', (a, b) => {
  //id and value of notes getting notes
  // console.log('datasnapshot', a.val());
  // });
  // const myObj = notesApp.toJSON();
  // console.log(myObj);

  let logout = null;
  if (userLoggeado) {
    logout = (
      <li className="nav-item">
        <Link className="nav-link" to={'/sign-in'}>
          Log out
        </Link>
      </li>
    );
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              WriteNotes
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
                    Sign up!
                  </Link>
                </li>
                {logout}
              </ul>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/sign-in" component={LoginForm} />
          <Route path="/sign-up" component={SignUpForm} />
          <Route exact path="/My-notes" component={Notes} />
          <Route exact path="/My-notes/:noteId?" component={Notes} />
          <Route exact path="/sign-in" component={Notes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
