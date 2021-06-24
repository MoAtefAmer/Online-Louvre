import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../NavBar/NavBar';
import { authService } from '../../../services/auth.service';
import { artActions } from '../../../actions/art.actions';
class Gallery extends Component {
  componentDidMount() {
      this.props.getAllArt()
  }

  render() {
    const role = localStorage.getItem(authService.userRoleKey);
    const username = localStorage.getItem(authService.usernameKey);
    return (
      <div>
        <NavBar username={username} role={role.toLowerCase()} />
      </div>
    );
  }
}

const mapState = (state) => ({...state});

const actionCreators = {
  getAllArt: artActions.getAllArt,
};

const conntectedGallery = connect(mapState, actionCreators)(Gallery);

export { conntectedGallery as Gallery };
