var express = require('express');
var router = express.Router();

exports.authCheck = (req, res, next) => {
  console.log(hello + req.user);

  if (req.auth_token && isAuthenticated(req.auth_token)) next();
  else {
    res.send('You are not authenticated');
    res.status(401).end();
  }
};

// // const jwt = require('jsonwebtoken');
// const authConfig = require('../auth/authConfig');
// const { JWT_SECRET } = require('../auth/authConfig');

// verifyToken = (req, res, next) => {
//   let token = req.session.token;

//   if (!token) {
//     return res.status(403).send({
//       message: 'No token provided!',
//     });
//   }

//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).send({
//         message: 'Unauthorized',
//       });
//     }
//     req.userId = decoded.id;
//     next();
//   });
// };

// const authJWT = {
//   verifyToken,
// };

module.exports = router;
const { token } = require("morgan");

exports.authCheck = (req, res, next) => {
    req.header.Authorization;
    if (req.auth_token && isAuthenticated(req.auth_token))
        next();
    else
        res.status(401).end();
}

exports.authCheck = (req, res, next) => {
    if (req.auth_token && isAuthenticated(req.auth_token))
        next();
    else
        res.status(401).end();
}