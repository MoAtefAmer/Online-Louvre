import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services';

export const AdminRoute = (props) => (
  <Route
    render={() =>
      localStorage.getItem(authService.userRoleKey) === 'ADMIN' &&
      localStorage.getItem(authService.tokenKey) ? (
        props.component
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);
