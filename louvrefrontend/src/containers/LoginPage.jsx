import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Checkbox, Form, Card,Icon,Image } from 'semantic-ui-react';

// import { loginBackground,loginFormStyle } from './loginStyle';
import './loginStyle.css'

class LoginContainer extends Component {
  render() {
    console.log('yata');
    return (
      <div className="loginBackground">
        <React.Fragment>
          <Container>
            <Card className="loginFormStyle"  fluid centered >
            
              <Card.Content>
                <Card.Header>Login</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
              
               
            
            </Card>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

const mapState = (state) => ({});

const actionCreators = {};

const connectedLoginPage = connect(mapState, actionCreators)(LoginContainer);
export { connectedLoginPage as LoginPage };
