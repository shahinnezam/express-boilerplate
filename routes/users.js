var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const secretKey = 'secret_key';
var users = [
  {
    id: 1,
    name: 'james',
    email: 'james@example.com',
    password: 'james123',
  },
  {
    id: 2,
    name: 'bob',
    email: 'bob@example.com',
    password: 'abc123',
  },
];

function generateToken(user) {
  const payload = { email: user.email, password: user.password };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    res.send({ msg: 'Token verified' }).status(200);
    next();
  });
}

router.get('/', function (req, res, next) {
  console.log(req.user);
  res.json({ data: 'list of users', users });
  next();
});

// Signup api
router.post('/signup', async (req, res, next) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 5);
  const user = { id: users.length + 1, name, email, password: hashedPassword };
  users.push(user);
  const token = generateToken(user);
  res.json({ token });
  // res.send({ msg: 'User created successfully' });
  next();
});

// Login api
router.post(
  '/login',
  async (req, res, next) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);
    if (!user) {
      console.log('User not found!');
      return res.sendStatus(401);
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log('Invalid password!');
      return res.sendStatus(401);
    }
    console.log('passwords match');
    res.send({ msg: 'User logged in successfully' }).status(200);
    next();
  }
  // (req, res) => {
  //   authenticateToken(req.param.authorization, res, next());
  //   next();
  // }
);

// router.get('/profile', authenticateToken, (req, res) => {
//   res.json(req.user);
// });

module.exports = router;
