var express = require('express');
var router = express.Router();

const photos = './photos';
router.get('/filter', (req, res) => {
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
  res.send(filteredFiles);
  if (req.query.fileType) {
    const typefile = req.query.fileType;
    const files = fs.readdirSync(photos);
    const filteredFiles = files.filter((file) => {
      return file.includes(typefile);
    });
  } else {
    res.sendStatus(200);
    res.send('No filter');
  }
  res.send(filteredFiles);
});

module.exports = router;
