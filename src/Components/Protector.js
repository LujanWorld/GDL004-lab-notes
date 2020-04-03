import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (firebase.auth().currentUser) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
