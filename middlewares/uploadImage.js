const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '-' + Date.now());
  },
});




const uploader = multer({
  storage,
  fileFilter: function fileFilter(req, file, cb) {
    //Checks if uploading person is admin
    if (req.user.userRole != 'ADMIN') return cb(null, false);

   
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg' ||
      file.mimetype == 'image/bmp'
    ) {
      return cb(null, true);
    }
    cb(null, false);
    return cb(new Error('ATTACHED FILES WITH WRONG FORMAT'));
  },
});



const uploadImage = uploader.single('myImage');


module.exports ={uploadImage}