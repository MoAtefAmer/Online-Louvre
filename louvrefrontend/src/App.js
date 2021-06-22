import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { PublicRoute } from './routes/PublicRoute'
import { LoginPage } from './containers'
import { Switch } from 'react-router'


export default class App extends Component {
  render() {
    console.log("asd")
    return (
      <Router >
      <React.Fragment>
        <Switch>
          <PublicRoute path="/" component={<LoginPage/>} exact  />
        </Switch>
      </React.Fragment>
     
    </Router>
    )
  }
}
