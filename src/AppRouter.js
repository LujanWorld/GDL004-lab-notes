import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginForm from './Components/LoginForm';
import { ProtectedRoute } from './Components/ProtectedRoute';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/home" component={HomePage} />
      <Route exact path="/" component={LoginForm} />
      <Route path="*" component={() => '404 NOT FOUND'} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
