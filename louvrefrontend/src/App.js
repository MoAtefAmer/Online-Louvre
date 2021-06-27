import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PublicRoute } from './routes/PublicRoute'
import { LoginPage } from './containers/Login'
import { Switch } from 'react-router'

import { GuestRoute } from './routes/GuestRoute'
import {AdminRoute} from './routes/AdminRoute'
import { Gallery } from './containers/Gallery/Gallery'
import {AdminPage} from './containers/AdminGallery/AdminPage'



export default class App extends Component {
  render() {
  
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
          <AdminRoute path="/dashboard" component={<AdminPage/>}/>
        </Switch>
      </React.Fragment>
     
    </Router>
    )
  }
}
