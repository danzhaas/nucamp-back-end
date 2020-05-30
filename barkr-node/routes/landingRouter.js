const express = require('express');
const bodyParser = require('body-parser');

const landingRouter = express.Router();

landingRouter.use(bodyParser.json());

landingRouter.route('/landing')
.all((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)  => {
    res.statusCode = 200;
    res.end('Will send landing page to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`GET operation not supported on /landing`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /landing');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /landing');
});

module.exports = landingRouter;