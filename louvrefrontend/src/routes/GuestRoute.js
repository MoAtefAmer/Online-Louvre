import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services';

export const GuestRoute = (props) => (
  <Route
    render={() =>
      localStorage.getItem(authService.userRoleKey) === 'GUEST' &&
      localStorage.getItem(authService.tokenKey) ? (
        props.component
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);
