import { loginConstants } from '../constants';

const initialState = {

  user:'',
  error:'',
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {
        ...state,
        user: action.user,
      };

    case loginConstants.LOGIN_SUCCESS:
      return {
        ...state,
        
        user: action.user,
        
      };

    case loginConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };

 
    default:
      return { ...state };
  }
}
