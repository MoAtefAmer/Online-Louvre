import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services';

const check =
  localStorage.getItem(authService.userRoleKey) == 'ADMIN'
    ? "/dashboard"
    : "/gallery";
export const PublicRoute = (props) => (
  <Route
    render={() =>
      localStorage.getItem('token') ? (
        <Redirect
          to={{ pathname: check, state: { from: props.location } }}
        />
      ) : (
        props.component
      )
    }
  />
);
