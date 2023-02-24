// const jwt = require('jsonwebtoken');
const authConfig = require('../auth/authConfig');
const { JWT_SECRET } = require('../auth/authConfig');

verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJWT = {
  verifyToken,
};

module.exports = authJWT;
