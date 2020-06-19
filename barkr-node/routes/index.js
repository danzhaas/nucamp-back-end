const express = require('express');
const bodyParser = require('body-parser');

const landingRouter = express.Router();

landingRouter.use(bodyParser.json());

landingRouter.route('/')
.all((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)  => {
    res.statusCode = 200;
    res.end('Will send landing page to you');
})
//  BECAUSE REGISTER/LOGIN MODAL IS HERE, WILL HAVE TO SUPPORT POST
.post((req, res) => {
    res.statusCode = 200;
    if (req.body.register) {
        //create new userId
    } else if (req.body.login) {
        //load userId with corresponding email and password
    }
    res.end(`POST operation not supported on /landing`);
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