var express = require('express');
var router = express.Router();
var fs = require('fs');

const photos = './bin';
router.get('/', (req, res) => {
  if (req.query.date) {
    const date = req.query.date;
    const files = fs.readdirSync(photos);
    const filteredFiles = files.filter((file) => {
      return file.includes(date);
    });
  }
  if (req.query.title) {
    const title = req.query.title;
    const files = fs.readdirSync(photos);
    const filteredFiles = files.filter((file) => {
      return file.includes(title);
    });
  }
  if (req.query.value) {
    const value = req.query.value;
    const files = fs.readdirSync(photos);
    const filteredFiles = files.filter((file) => {
      return file.includes(value);
    });
  }
  if (req.query.fileType) {
    const typefile = req.query.fileType;
    const files = fs.readdirSync(photos);
    const filteredFiles = files.filter((file) => {
      return file.includes(typefile);
    });
      res.send(filteredFiles);
  } else {
    res.sendStatus(200);
    res.send('No filter');
  }
  res.send(filteredFiles);
});

module.exports = router;
