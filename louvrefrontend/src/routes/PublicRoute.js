import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';


export const PublicRoute = (props) => (
  <Route render={() => props.component} path={props.path} />
);
