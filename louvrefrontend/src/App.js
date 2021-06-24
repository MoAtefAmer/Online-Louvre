import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PublicRoute } from './routes/PublicRoute'
import { LoginPage } from './containers/Login'
import { Switch } from 'react-router'

import { GuestRoute } from './routes/GuestRoute'
import {AdminRoute} from './routes/AdminRoute'
import { Gallery } from './containers/Login/Gallery/Gallery'
import { httpService } from './services'


export default class App extends Component {
  render() {
    console.log("asd")
// localStorage.removeItem("token")
// localStorage.removeItem("userRole")
// localStorage.removeItem("username")
// httpService.setJwt('')
return (
      <Router >
      <React.Fragment>
        <Switch>
          <PublicRoute path="/" component={<LoginPage/>} exact  />
          <GuestRoute path="/gallery" component={<Gallery/>} />
          <AdminRoute path="/dashboard" component={<div>dashboard</div>}/>
        </Switch>
      </React.Fragment>
     
    </Router>
    )
  }
}
