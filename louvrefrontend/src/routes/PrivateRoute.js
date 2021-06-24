import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services';
 
export const PrivateRoute = (props) => (
    <Route
      
        render={(props) =>
            localStorage.getItem(authService.tokenKey)? (
                props.component
            ) : (
                <Redirect
                    to={{ pathname: '/', state: { from: props.location } }}
                />
            )
        }
    />
);
