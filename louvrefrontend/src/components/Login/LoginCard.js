import React, { Component } from 'react';
import './style.css';

import { Input, Form, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';

import { authActions } from '../../actions';

class LoginCard extends Component {
  state = {
    username: '',
    password: '',
    submitted: false,
    emailErrorToggle: false,
    passwordErrorToggle: false,
  };

  schema = {
    required: ['username', 'password'],
    properties: {
      username: {
        title: 'Username',
        type: 'string',
        pattern:
          "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
        minLength: 5,
        maxLength: 100,
      },
      password: {
        title: 'Password',
        type: 'string',
        minLength: 8,
      },
    },
  };

  // };
  handleChange = (e, { name, value }) => {
    // this.props.validateInput(this.schema, name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const err = this.validate();

    if (err) {
      let x = document.getElementById('snackbar');
      x.className = 'show';
      x.textContent='Please enter credientials correctly'
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

      return;
    }
    // this.setState({submitted: true});
    const { username, password } = this.state;
    // await this.props.validateForm(this.schema, {phone, password});
    // this.setState({submitted: false});
    // if (!this.props.valid) return;
    await this.props.login(username, password);
  
  };

  validate = () => {
    let isError = false;
    const errors = {};
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(this.state.username)) {
      isError = true;
      errors.emailErrorToggle = true;
    } else {
      this.setState({ emailErrorToggle: false });
    }

    if (this.state.password.length < 8) {
      isError = true;
      errors.passwordErrorToggle = true;
    } else {
      this.setState({ passwordErrorToggle: false });
    }
  

    if (isError) {
      this.setState({ emailErrorToggle: errors.emailErrorToggle });
      this.setState({ passwordErrorToggle: errors.passwordErrorToggle });

      if (errors.emailErrorToggle || errors.passwordErrorToggle) {
    
       
      }
    }

    return isError;
  };

  render() {

    return (
      <div className="loginFormStyle">
        <div className="topSection">
          <h1>Log In</h1>

          {/* <hr /> */}
          <div className="theline"/>
        </div>

        <div className="form">
          {' '}
          <Form>
            <Form.Field>
              <label className="label">
                <p className="labelText">Email</p>
              </label>
              <Input
                name="username"
                placeholder="input your email in here"
                type="text"
                size="huge"
                className="formFields"
                onChange={this.handleChange}
                error={this.state.emailErrorToggle}
              />
            </Form.Field>
            <Form.Field>
              <label className="label">
                <p className="labelText">Password</p>
              </label>
              <Input
                placeholder="input your password in here"
                name="password"
                icon={{ name: 'eye slash outline', link: true }}
                size="huge"
                type="password"
                onChange={this.handleChange}
                error={this.state.passwordErrorToggle}
              />
            </Form.Field>

            <Button
              color="violet"
              type="submit"
              size="large"
              fluid
              className="button"
              onClick={this.handleSubmit}
            >
              Login
            </Button>
          </Form>
        </div>
        <div id="snackbar">Please enter credientials correctly</div>
      </div>
    );
  }
}

const mapState = (state) => ({ ...state });
const actionCreators = {
  login: authActions.login,
};

const connectedLoginCard = connect(mapState, actionCreators)(LoginCard);
export { connectedLoginCard as LoginCard };
