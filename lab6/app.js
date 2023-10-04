var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//khai báo router (1)
var phoneRouter = require('./routes/phone');

var app = express();

//khai báo thư viện hbs
var hbs = require('hbs')
//tạo helper cho hbs
hbs.registerHelper('eq', function(a, b) {
    return a === b;
});

hbs.registerHelper('gt', function(a, b) {
    return a > b;
});

hbs.registerHelper('lt', function(a, b) {
    return a < b;
});

//khai báo và cấu hình thư viện mongoose để kết nối với db
var mongoose = require('mongoose');
var uri = 'mongodb+srv://longndt:xOrkDHZXS3XtG2bb@cluster0.ary1nxp.mongodb.net/demo';
//Note: cần khai báo tên của db ở trong uri connection string (ex: demo)
mongoose.connect(uri)
.then(() => console.log('db connect ok'))
.catch((err) => console.error('db connect failed'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//khai báo router (2)
app.use('/phone', phoneRouter);

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

//đổi post để deploy lên cloud
app.listen(process.env.PORT || 3001);

module.exports = app;
