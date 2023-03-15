var express = require('express');
var aws = require('aws-sdk');
var bodyParser = require('body-parser');
var multer = require('multer');
var multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: 'PSUJBRdbRQTqhhYNASGt97C82ixPIQ5iBQwPisk9',
  accessKeyId: 'AKIAUBKRRGB4PZCM2K5Y',
  region: 'us-west-2',
});

var app = express(),
  s3 = new aws.S3();

app.use(bodyParser.json());

var upload = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: '470final',
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.Date.now()); 
    },
  }),
});
