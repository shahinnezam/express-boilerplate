const express = require("express");
var router = express.Router();

const fs = require("fs");

router.delete('/files', (req, res, next) => {
    let filename = req.body.name;
    let path = `./bin/${filename}`;
    console.log(filename);
    console.log(path);
    fs.unlink(path, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete the file. " + err,
            });
        }

        res.status(200).send({
            message: "File is deleted.",
        });
    });
});


module.exports = router;