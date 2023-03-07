const { Router } = require('express');
const User = require('..database/schemas/user');
const { hashPassword, comparePassword } = require('../utils/password');

const router = Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

});

let users = [{
    id: userId,
    username: 'test',
    password: '123'
}]

let sessions = [{
    'sessionId': '123456',
    'token': 'sdafklj',
    'user': 'shahin'
}]

router.post('/signup', (req, res, next) => {
    if (!req.body || !req.body.username || !req.body.password) {
        res.send(400, 'Bad Request');
        return;
    }
    else
        next();
});

router.post('/login', (req, res) => {
    if (!req.body || !req.body.username || !req.body.password) {
        response.send(400, 'Bad Request')
    }
}
)
// const user = mongo.users.findOne({ username: username })
// if (user) {
//     res

module.export = router;