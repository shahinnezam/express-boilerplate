var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const secretKey = 'secret_key';
const users = [
  {
    id: 1,
    name: 'james',
    email: 'james@example.com',
    password: '$2b$10$eVcM/bM09cJwyhbPDYXuVOnKZt57eSyV7ndiHT3FcFjKl2BJHbJ0m',
  },
  {
    id: 2,
    name: 'bob',
    email: 'bob@example.com',
    password: '$2b$10$eVcM/bM09cJwyhbPDYXuVOnKZt57eSyV7ndiHT3FcFjKl2BJHbJ0m',
  },
];

function generateToken(user) {
  const payload = { userID: user.id, name: user.name };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, secretKey, (err, user) => {
    if (error) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

router.get('/', function (req, res, next) {
  console.log(req.user);
  res.json({ data: 'list of users' });
});

// Signup api
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, name, email, password: hashedPassword };
  users.push(user);
  const token = generateToken(user);
  res.json({ token });
});

// Login api
router.post('/login', async (req, res) => {
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
  // const token = generateToken(user);
  // res.json({ token });
});

module.exports = router;
