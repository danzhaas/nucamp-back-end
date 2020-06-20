const express = require('express');
const authenticate = require('../authenticate');
const cors = require('./cors');
const Favorite = require('../models/favorite');
const user = require('../models/user');

const favoriteRouter = express.Router();

favoriteRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
        Favorite.find({ user: req.user._id })
            .populate('user')
            .populate('campsite')
            .then(favorites => {
                res.json(favorites);
            })
            .catch(err => next(err));
    })

    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id }) //body is  [{"_id":"campsite ObjectId"},  . . . , {"_id":"campsite ObjectId"}]
            .then(favoriteDoc => {
                console.log(favoriteDoc);
                if (favoriteDoc) {
                    req.body.forEach(campsite => {      //campsite is _id:value
                        if (!favoriteDoc.campsites.includes(campsite._id)) {
                            favoriteDoc.campsites.push(campsite._id);
                        }
                        favoriteDoc.save()
                            .then(favorite => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(favorite);
                            })
                            .catch(err => next(err));
                    })
                } else {
                    Favorite.create({
                        user: req.user._id,
                        campsites: req.body
                    })
                        .then(favorite => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(favorite);
                        })
                        .catch(err => next(err));
                }
            })
            .catch(err => next(err));
    })

    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /favorites');
    })

    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.deleteOne({ user: req.user._id })
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });


favoriteRouter.route('/:campsiteId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        res.statusCode = 403;
        res.end('GET operation not supported on /favorites:campsiteId')
    })

    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        //if the campsite is not already in the list of favorites, 
        Favorite.findOne({ user: req.user._id })
            .then(favoriteDoc => {
                if (favoriteDoc) {
                    if (!favoriteDoc.campsites.includes(req.params.campsiteId)) {
                        //add the campsite specified in the URL parameter to the list of the user's list of favorite campsites, 
                        favoriteDoc.campsites.push(req.params.campsiteId);
                        favoriteDoc.save()
                            .then(favorite => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(favorite);
                            })
                            .catch(err => next(err));
                    } else {
                        //If the campsite is already in the list, then 
                        //respond with a message saying "That campsite is already in the list of favorites!"
                        err = new Error("That campsite is already in the list of favorites!");
                        err.statusCode = 400;
                        return next(err);
                    }
                    //If the user has not previously defined any favorites, 
                } else {
                    //then you will need to create a new Favorite document for this user.
                    Favorite.create({
                        user: req.user._id,
                        campsites: [{_id: req.params.campsiteId}]
                    })
                        .then(favorite => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(favorite);
                        })
                        .catch(err => next(err));
                }
            }
            )
            .catch(err => next(err));
    })

    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /favorites:campsiteId');
    })

    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id })
        .then(favoriteDoc => {
            //you will remove the specified campsite from the list of the user's list of favorites.
            favoriteDoc.campsites=favoriteDoc.campsites.filter(campsite => campsite != req.params.campsiteId);
            favoriteDoc.save()
            .then(favorites => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(favorites);
            })
            .catch(err => next(err))
        })
        .catch(err => next(err));
})

module.exports = favoriteRouter;