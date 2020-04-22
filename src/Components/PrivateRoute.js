import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  isAuthenticated,
  isLoading,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLoading ? (
          <p>Loading</p>
        ) : isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
}
