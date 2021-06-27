import { loginConstants } from '../constants';
import { authService } from '../services';
import { logoutConstants } from '../constants';

export const authActions = {
  login,
 logout,
};

function login(username, password) {
  return async (dispatch) => {
    await dispatch(request({ username, password }));
    try {
      await authService.login(username, password);

      dispatch(success());
    } catch (ex) {
      dispatch(failure(ex));
    }
  };

  function request(user) {
    return { type: loginConstants.LOGIN_REQUEST, user };
  }

  function success(user) {
    window.location.reload();
    return { type: loginConstants.LOGIN_SUCCESS, user };
  }

  function failure(error) {
    let x = document.getElementById('snackbar');
    x.className = 'show';
    x.textContent ="Email or Password entered incorrectly!"
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return { type: loginConstants.LOGIN_FAILURE, error };
  }
}



function logout() {
  return async (dispatch) => {
    await dispatch(request());
    try {
      await authService.logout();

      dispatch(success());
    } catch (ex) {
      dispatch(failure(ex));
    }
  };

  function request() {
    return { type: logoutConstants.LOGOUT_REQUEST };
  }

  function success() {
  
    window.location.reload();
    return { type: logoutConstants.LOGOUT_SUCCESS };
  }

  function failure(error) {
    return { type: logoutConstants.LOGOUT_FAILURE, error };
  }
}