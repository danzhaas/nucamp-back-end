const express = require('express');
const bodyParser = require('body-parser');

const meetRouter = express.Router();

meetRouter.use(bodyParser.json());

meetRouter.route('/meet/:dogId/*')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res)  => {
    res.statusCode = 200;
    res.end(`Will send details of the dog: ${req.params.dogId} to you`);
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


// meetRouter.route('/meet/talk/:dogId')
// .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// })
// .get((req, res)  => {
//     res.statusCode = 200;
//     res.end(`Will send details of the dog: ${req.params.dogId} to you`);
// })
// .post((req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /meet`);
// })
// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /meet');
// })
// .delete((req, res) => {
//     res.statusCode = 403;
//     res.end('DELETE operation not supported on /meet');
// });


// meetRouter.route('/meet/adventure/:dogId')
// .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// })
// .get((req, res)  => {
//     res.statusCode = 200;
//     res.end(`Will send details of the dog: ${req.params.dogId} to you`);
// })
// .post((req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /meet`);
// })
// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /meet');
// })
// .delete((req, res) => {
//     res.statusCode = 403;
//     res.end('DELETE operation not supported on /meet');
// });


// meetRouter.route('/meet/care/:dogId')
// .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// })
// .get((req, res)  => {
//     res.statusCode = 200;
//     res.end(`Will send details of the dog: ${req.params.dogId} to you`);
// })
// .post((req, res) => {
//     res.statusCode = 403;
//     res.end(`POST operation not supported on /meet`);
// })
// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /meet');
// })
// .delete((req, res) => {
//     res.statusCode = 403;
//     res.end('DELETE operation not supported on /meet');
// });

module.exports = meetRouter;