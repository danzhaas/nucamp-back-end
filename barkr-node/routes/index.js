const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = express.Router();

indexRouter.use(bodyParser.json());

indexRouter.route('/')
.all((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    next();
})
// .get((req, res)  => {
//     res.statusCode = 200;
//     res.end('Sending landing page to you');
// })
.get((req, res)  => {
    dog.find()
    .then(dogs)
    res.status(200).json(Dog);
    res.end(`Will send details of all dogs to you`)
})
//  BECAUSE REGISTER/LOGIN MODAL IS HERE, WILL HAVE TO SUPPORT POST
.post((req, res) => {
    res.statusCode = 200;
    if (req.body.register) {
        //create new userId
    } else if (req.body.login) {
        //load userId with corresponding email and password
    }
    res.end(`POST operation not supported on landing page`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on landing page');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on landing page');
});

module.exports = indexRouter;