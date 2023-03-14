// var express = require('express');
// var router = express.Router();
// var multer = require('multer');

// const uploadFilePath = path.resolve(__dirname, '../..', 'public/uploads');

// const storageFile = multer.diskStorage({
//   destination: uploadFilePath,
//   filename(req, file, next) {
//     const file = req.file;
//     if (!file) {
//       const error = new Error('Please upload a file');
//       error.httpStatusCode = 400;
//       return next(error);
//     }
//     next(null, file.fieldname + '-' + Date.now());
//   },
// });

// const uploadFile = multer({
//   storage: storageFile,

//   limits: { fileSize: 5 * 1024 * 1024 },

//   fileFilter(req, file, callback) {
//     const extension: boolean =
//       ['.png', '.jpg', '.jpeg'].indexOf(
//         path.extname(file.originalname).toLowerCase()
//       ) >= 0;

//     const mimeType: boolean =
//       ['image/png', 'image/jpg', 'image/jpeg'].indexOf(file.mimetype) >= 0;

//     if (extension && mimeType) {
//       return callback(null, true);
//     }

//     callback(
//       new Error(
//         'Invalid file type. Only picture file on type PNG and JPG are allowed!'
//       )
//     );
//   },
// }).single('picture');

// const handleSingleUploadFile = async ({ req, res }) => {
//   return new Promise((resolve, reject) => {
//     uploadFile(req, res, (error) => {
//       if (error) {
//         reject(error);
//       }
//       resolve({ file: req.file, body: req.body });
//     });
//   });
// };

// exports.module = dataStorage;
