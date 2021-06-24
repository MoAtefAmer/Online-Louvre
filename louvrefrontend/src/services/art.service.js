import jwt from 'jwt-decode';
import { httpService } from './http.service';
import { authService } from './auth.service';

const apiEndPoint = process.env.REACT_APP_BASE_URL;

const apiLink = apiEndPoint + '/art';
const token =localStorage.getItem("token")


const config = {
  params: {
    pageLimit: '0',
    pageNumber: '0',
  },
};

export const artService = {
  getAllArt,
};

async function getAllArt() {
    
//  httpService.setJwt(token)
  const data = await httpService.get(`${apiLink}/getAllArt`, config)
    
  
  console.log(data);

  return data;
}
