const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const s3Config = new AWS.S3({
  secretAccessKey: 'PSUJBRdbRQTqhhYNASGt97C82ixPIQ5iBQwPisk9',
  accessKeyId: 'AKIAUBKRRGB4PZCM2K5Y',
  region: 'us-west-2',
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, 'src/api/media/profiles');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});

const multerS3Config = multerS3({
  s3: s3Config,
  bucket: '470final',
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    console.log(file);
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: multerS3Config,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, 
  },
});

exports.image = uploading;
