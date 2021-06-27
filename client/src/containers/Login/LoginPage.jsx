import React, { Component } from 'react';
import { connect } from 'react-redux';


// import { loginBackground,loginFormStyle } from './loginStyle';
import './loginStyle.css';

import {LoginCard} from '../../components/Login/LoginCard';

class LoginContainer extends Component {
  render() {
 
    
    return (
     

      <div className="loginBackground">
         <LoginCard title="Log In"/>
         
      </div>
    );
  }
}

const mapState = (state) => ({});

const actionCreators = {};

const connectedLoginPage = connect(mapState, actionCreators)(LoginContainer);
export { connectedLoginPage as LoginPage };
