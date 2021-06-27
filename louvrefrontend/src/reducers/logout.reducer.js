import { logoutConstants } from '../constants';

const initialState = {

  
  error:'',
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case logoutConstants.LOGOUT_REQUEST:
      return {
        ...state,
       
      };

    case logoutConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        
       
        
      };

    case logoutConstants.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.error,
      };

 
    default:
      return { ...state };
  }
}
