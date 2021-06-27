import { userConstants } from "../constants";

const initialState = {
  
  user:[],
  error:'',
  isLoaded:false,  
};

export default function admin(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USERS_REQUEST:
      return {
        ...state,
      };

    case userConstants.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoaded:action.isLoaded,
        user: action.user,
        
      };

    case userConstants.GET_USERS_FAILURE:
      return {
        ...state,
        isLoaded:action.isLoaded,
        error: action.error,
      };

 
    default:
      return { ...state };
  }
}
