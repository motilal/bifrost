var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var engine = require('ejs-locals')
var mysql = require("mysql");
var app = express();
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('express-flash');
var moment = require('moment');

app.use(function (req, res, next) {
    global.connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'bifrost',
        debug: false
    });
    res.locals.current_uri = req.path.split('/');
    next();
});
// view engine setup
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(expressSession({secret: 'xmsndofifjfjdodierjierio', resave: true, saveUninitialized: true}));


//app.use(logger('dev')); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
    if (req.user) {
        res.locals.auth_session = req.user;
    }
    next();
});
require('./passport/pass')(passport);
require('./routes/index')(app, passport, moment);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
var server = app.listen(3000, function () {
    console.log("Example app listening at http://localhost:%s", server.address().port);
});
module.exports = app;
