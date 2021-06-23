import React from 'react';
import './style.css';

import { Input, Form, Button } from 'semantic-ui-react';



export default function LoginCard({ title }) {
  return (
    <div className="loginFormStyle">
      <div className="topSection">
        <h1>{title}</h1>

        <hr />
      </div>

      <div className="form">
        {' '}
        <Form size="Large">
          <Form.Field>
            <label className="label">
              <p className="labelText">Email</p>
            </label>
            <Input
              placeholder="input your email in here"
              type="text"
              size="huge"
              className="formFields"
              
            />
          </Form.Field>
          <Form.Field>
            <label className="label">
              <p className="labelText">Password</p>
            </label>
            <Input
              placeholder="input your password in here"
            
              icon={{ name: 'eye slash outline',  link: true }}
              size="huge"
              
              type="password"
            />
          </Form.Field>

          <Button
            color="violet"
            type="submit"
            size="large"
            fluid
            className="button"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
