var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var users = [
  {
    _id: 1,
    username: 'tester01',
    password: 'test01',
  },
  {
    _id: 2,
    username: 'tester02',
    password: 'test02',
  },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/signup', (req, res) => {
  var token = jwt.sign({ username: 'newuser' }, 'abc123', {
    expiresIn: 5000,
  });
  res.json(token);
});

router.get('/login', (req, res) => {
  var token = req.query.token;
  jwt.verify(token, 'abc123', (err, decoded) => {
    if (!err) {
      var secrets = {
        email: 'newuser@abc.com',
        private: '0123',
      };
      res.json(secrets);
    } else {
      res.send(err);
    }
  });
});

router.post('/push', (req, res) => {
  console.log(body);
  if (req.body) {
    users.push(req.body);
  }
  res.status(200).end();
});

module.exports = router;
