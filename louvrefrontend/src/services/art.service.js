
import { httpService } from './http.service';


const apiEndPoint = process.env.REACT_APP_BASE_URL;

const apiLink = apiEndPoint + '/art';



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
    

  const data = await httpService.get(`${apiLink}/getAllArt`, config)
    
  
  console.log(data);

  return data;
}
