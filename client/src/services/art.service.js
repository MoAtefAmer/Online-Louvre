import { httpService } from './http.service';

const apiEndPoint = process.env.REACT_APP_BASE_URL;

const apiLink = apiEndPoint + '/art';

export const artService = {
  getAllArt,
  deleteArtPiece,
};


// const config = {
//   params: {
//     pageLimit: `${pageLimit}`,
//     pageNumber: `${pageNumber}`,
//   },
// }
async function getAllArt(pageNumber, pageLimit) {
 ;

  const data = await httpService.get(`${apiLink}/getAllArt`, {
    params: {
      pageLimit: `${pageLimit}`,
      pageNumber: `${pageNumber}`,
    },
  });



  return data;
}


async function deleteArtPiece(body){
 

const data = await httpService.delete(`${apiLink}/deleteArtPiece`,{data:{id:body.id}});

return data;

}