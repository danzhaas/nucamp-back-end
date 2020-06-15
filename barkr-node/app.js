var createError = require('http-errors');
const express = require('express');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const addRouter = require('./routes/addRouter');
const meetRouter = require('./routes/meetRouter');
const landingRouter = require('./routes/landingRouter');

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/barkr';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'),
    err => console.log(err)
);

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/meet', meetRouter);

// Authentication goes here

app.use('/user', userRouter);

app.use(express.static(__dirname + '/public'));



//  PRETTY SURE THIS IS JUST TO TEST IF SERVER WORKS
// app.use((req, res) => {
//     res.statusCode= 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>This is an Express Server</h1></body></html>');
// })

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;