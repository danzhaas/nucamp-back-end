const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/add/:userId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)  => {
    res.end(`Will send details of the user: ${req.params.userId} to you`)
})
// Post vs Put will go in back end
.post((req, res) => {
    res.end(`Created user with ID: ${req.params.userId}`);
})
.put((req, res) => {
    res.write(`Updating the user: ${req.params.userId}\n`);
    res.end(`Will update the property: ${req.body.property}
        with value: ${req.body.value}`);
})
.delete((req, res) => {
    res.end(`Deleting user: ${req.params.userId}`);
});

module.exports = userRouter;