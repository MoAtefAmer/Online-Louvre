import React, { Component } from 'react';
import { connect } from 'react-redux';
import './navbar.css'
import { authActions } from '../../actions';
 class NavBar extends Component {



handleLogout = async(e)=>{
  e.preventDefault();

 await this.props.logout()
}


  render() {
    const {username,role} =this.props 
    return (
      <div className="topnav">
       <h1 className="title">Louvre</h1>
       <h4 className="user">{username}</h4>
     <p className="role">{role}</p>
     <button className="logout" onClick={this.handleLogout}>Logout</button>
     
      </div>
    );
  }
}

const mapState = (state) => ({...state});

const actionCreators = {
  logout:authActions.logout
};

const connectedNavBar = connect(mapState, actionCreators)(NavBar);
export { connectedNavBar as NavBar };
