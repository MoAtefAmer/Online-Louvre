import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authService.getCurrentUser() ? (
                <Fragment>
                    <Component {...props} {...rest} />
                </Fragment>
            ) : (
                <Redirect
                    to={{ pathname: '/login', state: { from: props.location } }}
                />
            )
        }
    />
);
