import { loginConstants } from '../constants';
import { authService } from '../services';

export const authActions = {
  login,
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
    return { type: loginConstants.LOGIN_FAILURE, error };
  }
}
