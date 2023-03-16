const express = require('express');
var router = express.Router();

const fs = require('fs');

router.put('/files', (req, res, next) => {

    const fileName = 'cutepuppy';
    const filePath = './bin/' + fileName + '.jpg';
    const newFilename = 'editedTitle';
    fs.readFile(filePath, function (error, data) {
        if (error) {
            console.log(error);
            return;
        }

        fs.rename('./bin/' + fileName + '.jpg', './bin/' + newFilename + '.png', function (err) {
            if (err) console.log('ERROR: ' + err);
        });
        console.log("file renamed successfully");
        res.status(200).send('File renamed successfully');

        // var obj = JSON.parse(data);
        // for (var p in obj) {
        //     fs.rename('./bin/' + obj[p] + '.jpg', './bin/' + p + '.png', function (err) {
        //         if (err) console.log('ERROR: ' + err);
        //     });
        // }
    });
});

module.exports = router;
