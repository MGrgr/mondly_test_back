var createError = require('http-errors');
var express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');

var app = express();
app.use(cors());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
const db = require("./models");
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

app.use(logger('dev'));
app.use(express.json({ urlencoded: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/admin', urlencodedParser, adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
