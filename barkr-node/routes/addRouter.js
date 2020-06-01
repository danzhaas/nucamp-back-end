const express = require('express');
const bodyParser = require('body-parser');

const addRouter = express.Router();

addRouter.use(bodyParser.json());

addRouter.route('/add/:dogId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)  => {
    res.end(`Will send details of the dog: ${req.params.dogId} to you`)
})
// Post vs Put will go in back end
.post((req, res) => {
    res.end(`Created dog with ID: ${req.params.dogId}`);
})
.put((req, res) => {
    res.write(`Updating the dog: ${req.params.dogId}\n`);
    res.end(`Will update the property: ${req.body.property}
        with value: ${req.body.value}`);
})
.delete((req, res) => {
    res.end(`Deleting dog: ${req.params.dogId}`);
});

module.exports = addRouter;