import { artConstants } from '../constants';

const initialState = {
  
  art:[],
  error:'',
  isLoaded:false,  
};

export default function art(state = initialState, action) {
  switch (action.type) {
    case artConstants.GET_ART_REQUEST:
      return {
        ...state,
      };

    case artConstants.GET_ART_SUCCESS:
      return {
        ...state,
        isLoaded:action.isLoaded,
        art: action.art,
        
      };

    case artConstants.GET_ART_FAILURE:
      return {
        ...state,
        isLoaded:action.isLoaded,
        error: action.error,
      };


      case artConstants.DELETE_ART_REQUEST:
        return {
          ...state,
        };
  
      case artConstants.DELETE_ART_SUCCESS:
        return {
          ...state,
          isLoaded:action.isLoaded,
          art: action.art,
          
        };
  
      case artConstants.DELETE_ART_FAILURE:
        return {
          ...state,
          isLoaded:action.isLoaded,
          error: action.error,
        };

 
    default:
      return { ...state };
  }
}
