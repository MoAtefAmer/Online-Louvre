import { userConstants } from "../constants";
import { adminService } from "../services";

export const adminActions={
    getAllUsers,
}


function getAllUsers(pageNumber,pageLimit) {
    return async (dispatch) => {
      await dispatch(request());
   
      try {
         
      const user=  await adminService.getAllUsers(pageNumber,pageLimit);
    
  
        dispatch(success(user.data));
      } catch (ex) {
        dispatch(failure(ex));
      }
    };
  
    function request() {
      return { type: userConstants.GET_USERS_REQUEST };
    }
  
    function success(user) {
      
      return { type: userConstants.GET_USERS_SUCCESS, isLoaded:true,user };
    }
  
    function failure(error) {
      return { type: userConstants.GET_USERS_FAILURE, isLoaded:true ,error};
    }
  }