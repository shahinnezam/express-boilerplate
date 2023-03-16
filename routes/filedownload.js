var express = require('express');
var router = express.Router();
const path = require('path');

const fs = require('fs');

const directoryPath = path.join(__dirname, '../../bin');
//passsing directoryPath and callback function

// List all files
router.get('/', (req, res, next) => {

    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
        res.json(files);
    });
});

// Rread a single file
router.get('/single', (req, res, next) => {
    let filename = req.body.name;
    let path = `./bin/${filename}`;
    let data = fs.createReadStream(path);
    // let data = fs.createReadStream('./bin/cutepuppy.jpg');

    console.log(data);
    res.send(data);
});

module.exports = router;
