var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')
const clinetRouter = require('./routes/clinet/clinetRouter')
const apiRouter = require('./routes/api/apiRouter')

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

// config session
app.set('trust proxy', 1) // trust first proxy    
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // deploid lên mới để là true còn môi trường local thì đặt là false
}))


// config router 
app.use('/api',apiRouter) 
app.use('/',clinetRouter)
// #) lưu ý phải để apiRouter chạy hết trước


// catch 404 and forward to error handler`
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
  res.render('errorPage/error');
});

module.exports = app;
