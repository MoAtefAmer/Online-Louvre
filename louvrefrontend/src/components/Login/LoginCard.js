import React ,{Component} from 'react';
import './style.css';

import { Input, Form, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';

import { authActions } from '../../actions';




 class LoginCard extends Component {

  state={username:'',password:'',submitted:false}

   schema={
    "required": ['username', 'password'],
    "properties": {
      "username": {
        "title":"Username",
        "type": 'string',
        "pattern":
          "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
        "minLength": 5,
        "maxLength": 100,
      },
      "password": {
        "title":"Password",
        "type": 'string',
        "minLength": 8,
      },
  
    },
  }

// const [username,setUsername]=useState("")
// const [password,setPassword] = useState("")

// useEffect(() => {

// }, [username,password])

// const handleChangeUsername = (e, {value}) => {
//   // this.props.validateInput(this.schema, name, value);
  
 
//   setUsername(value)

 
// };
handleChange = (e, {name, value}) => {
  // this.props.validateInput(this.schema, name, value);
  this.setState({[name]: value});
};

// const handleChangePassword = (e, {value}) => {
//   // this.props.validateInput(this.schema, name, value);
//   setPassword(value)
// };

handleSubmit = async (e) => {
  e.preventDefault();
  // this.setState({submitted: true});
  const { username, password } = this.state;
  // await this.props.validateForm(this.schema, {phone, password});
  // this.setState({submitted: false});
  // if (!this.props.valid) return;
  await this.props.login(username, password);
};
render(){

console.log(this.state)

// localStorage.setItem("token","")
// localStorage.setItem("userRole","")
console.log(localStorage.getItem("token"))
// console.log(authService.getCurrentUser())
  return (
    <div className="loginFormStyle">
      <div className="topSection">
        <h1>Log In</h1>

        <hr />
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
    </div>
  );
};

}

const mapState = (state) => ({ ...state });
const actionCreators = {
  login: authActions.login,
};

const connectedLoginCard = connect(mapState, actionCreators)(LoginCard);
export { connectedLoginCard as LoginCard };
