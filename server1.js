var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
console.log("server")
var app = express();
console.log("server-------------------------------------1")
// override POST to have DELETE and PUT
app.use(methodOverride('_method'))
console.log("server-------------------------------------2")
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
app.use(cookieParser());
console.log("server-------------------------------------3")
// view engine setup
app.set('views', path.join(__dirname, 'views'));
console.log("server-------------------------------------4")
//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
console.log("server-------------------------------------5")
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
console.log("server-------------------------------------6")
app.use(logger('dev'));
console.log("server-------------------------------------7")
app.use(bodyParser.json());
console.log("server-------------------------------------8")
app.use(bodyParser.urlencoded({ extended: false }));
console.log("server-------------------------------------9")
app.use(cookieParser());
console.log("server-------------------------------------10")
app.use(express.static(path.join(__dirname, 'public')));
console.log("server-------------------------------------11")

var application_controller = require('./controllers/application_controller');
console.log("server-------------------------------------11.5")
var burgers_controller = require('./controllers/burgers_controller');
console.log("server-------------------------------------12")
app.use('/', application_controller);
console.log("server-------------------------------------13")
app.use('/burgers', burgers_controller);
console.log("server-------------------------------------14")
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  console.log("server-------------------------------------15")
  err.status = 404;
  console.log("server-------------------------------------16")
  next(err);
  console.log("server-------------------------------------17")
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

console.log("server end")
module.exports = app;
