var createError = require('http-errors');
const express = require('express');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const addRouter = require('./routes/addRouter');
const viewRouter = require('./routes/viewRouter');
const landingRouter = require('./routes/landingRouter');

const mongoose = require('mongoose');

const hostname = 'localhost';
const port = 3000;

const url='mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
  useCreateIndex:true,
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

app.use('/view', viewRouter);
app.use('/add', addRouter);
app.use('/landing', landingRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})