import { artConstants } from '../constants';
import { artService } from '../services';

export const artActions = {
    getAllArt,
};

function getAllArt() {
  return async (dispatch) => {
    await dispatch(request());
    console.log("art")
    try {
        console.log("2")
    const art=  await artService.getAllArt();
  

      dispatch(success(art));
    } catch (ex) {
      dispatch(failure(ex));
    }
  };

  function request() {
    return { type: artConstants.GET_ART_REQUEST };
  }

  function success(art) {
    
    return { type: artConstants.GET_ART_SUCCESS, isLoaded:true,art };
  }

  function failure(error) {
    return { type: artConstants.GET_ART_FAILURE, isLoaded:true ,error};
  }
}
