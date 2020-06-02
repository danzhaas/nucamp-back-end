const express = require('express');
const bodyParser = require('body-parser');

const viewRouter = express.Router();

viewRouter.use(bodyParser.json());


viewRouter.route('/view/*/:dogId')
//viewRouter.route('/view/dog-home/:dogId')
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
    res.end(`POST operation not supported on /view`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /view');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /view');
});


// viewRouter.route('/view/talk/:dogId')
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
//     res.end(`POST operation not supported on /view`);
// })
// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /view');
// })
// .delete((req, res) => {
//     res.statusCode = 403;
//     res.end('DELETE operation not supported on /view');
// });


// viewRouter.route('/view/adventure/:dogId')
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
//     res.end(`POST operation not supported on /view`);
// })
// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /view');
// })
// .delete((req, res) => {
//     res.statusCode = 403;
//     res.end('DELETE operation not supported on /view');
// });


// viewRouter.route('/view/care/:dogId')
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
//     res.end(`POST operation not supported on /view`);
// })
// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /view');
// })
// .delete((req, res) => {
//     res.statusCode = 403;
//     res.end('DELETE operation not supported on /view');
// });

module.exports = viewRouter;