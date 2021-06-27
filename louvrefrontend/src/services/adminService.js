import { httpService } from './http.service';

const apiEndPoint = process.env.REACT_APP_BASE_URL;

const apiLink = apiEndPoint + '/';

export const adminService = {
  getAllUsers,
};


async function getAllUsers(pageNumber, pageLimit) {
 ;

  const data = await httpService.get(`${apiLink}/getUsers`, {
    params: {
      pageLimit: `${pageLimit}`,
      pageNumber: `${pageNumber}`,
    },
  });



  return data;
}
