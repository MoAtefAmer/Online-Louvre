import React, { Component } from 'react';
import { connect } from 'react-redux';
import './navbar.css'
export class NavBar extends Component {
  render() {
    const {username,role} =this.props 
    return (
      <div className="topnav">
       <h1 className="title">Louvre</h1>
       <h4 className="user">{username}</h4>
     <p className="role">{role}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
