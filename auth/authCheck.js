const { token } = require("morgan");

exports.authCheck = (req, res, next) => {
    req.header.Authorization;
    if (req.auth_token && isAuthenticated(req.auth_token))
        next();
    else
        res.status(401).end();
}
//in progress
// exports.authCheck = (req, res, next) => {
//     req.headers.authorization;
//     const user = users[req.auth_token];
//     if (user === req.heaer.authorization)
//         next();
//     if (!user) {
//         res.send(401, 'forbidden);
//     }
// });