var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const http = require('http');

var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
const { authCheck } = require('./auth/authCheck')

var app = express();
const port = 3000;
const requestListener = (req, res) => {
  res.writeHead(200);
  res.end('Hello, Server!');
}
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://localhost:${ port }`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', homeRouter);
app.use('/users', authCheck, usersRouter);
app.use('/auth', authRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
