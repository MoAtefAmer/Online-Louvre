import { artConstants } from '../constants';
import { artService } from '../services';

export const artActions = {
    getAllArt,
    deleteArtPiece,
};

function getAllArt(pageNumber,pageLimit) {
  return async (dispatch) => {
    await dispatch(request());
 
    try {
       
    const art=  await artService.getAllArt(pageNumber,pageLimit);
  

      dispatch(success(art.data));
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


function deleteArtPiece(body) {
  return async (dispatch) => {
    await dispatch(request());
   
    try {
       
    const art=  await artService.deleteArtPiece(body);
  
    

      dispatch(success(art.data));
      window.location.reload()
    } catch (ex) {
      dispatch(failure(ex));
    }
  };

  function request() {
    return { type: artConstants.DELETE_ART_REQUEST };
  }

  function success(art) {
    
    return { type: artConstants.DELETE_ART_SUCCESS, isLoaded:true,art };
  }

  function failure(error) {
    return { type: artConstants.DELETE_ART_FAILURE, isLoaded:true ,error};
  }
}

