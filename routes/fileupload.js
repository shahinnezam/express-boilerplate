var express = require('express');
var router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../bin');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// const upload = multer({ dest: '../bin' });
const upload = multer({ storage: storage }).single('file');

const uploader = async (req, res, next) => {
  upload(req, res, function (err) {
    if (err) console.log(err);
    else next();
  });
};

router.get('/', (req, res, next) => {
  console.log('string');
});

router.post('/file', uploader, function (req, res) {
  const title = req.body.title;
  const file = req.file;

  console.log(title);
  console.log(file);

  res.sendStatus(200);
});

router.get('/png', (req, res, next) => {
  console.log('object');
});

router.get('/file/:fileName', function (req, res) {
  const filePath = '../bin'; // find out the filePath based on given fileName
  console.log('object');
  res.sendFile(filePath);
});

module.exports = router;
