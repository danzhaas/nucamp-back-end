const express = require('express');
const bodyParser = require('body-parser');
const dog = require('../models/dog')

const chooseDogRouter = express.Router();

chooseDogRouter.use(bodyParser.json());

chooseDogRouter.route('/choose')
.all((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)  => {
    dog.find()
    .then(dogs)
    res.status(200).json(Dog);
    res.end(`Will send details of all dogs to you`)
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /meet`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /meet');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /meet');
});

module.exports = chooseDogRouter;