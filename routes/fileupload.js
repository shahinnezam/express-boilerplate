var express = require('express');
var router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './bin');
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


// Post
router.post('/file', uploader, function (req, res) {
  const title = req.body.title;
  const file = req.file;

  console.log(title);
  console.log(file);
  
  res.sendStatus(200);
});

module.exports = router;
