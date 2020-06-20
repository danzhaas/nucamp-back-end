var createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const meetRouter = require('./routes/meetRouter');
const userRouter = require('./routes/userRouter');
const chooseDogRouter = require('./routes/chooseDogRouter');

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

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

// app.use((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>This is an Express Server</h1></body></html>');
// });

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});