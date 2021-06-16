const movieRouter = require('express').Router()
const movieActorController = require('../controllers/movieActorController')
const movieController = require('../controllers/movieController')
const genreController = require('../controllers/genreController')
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware')

const APP_URL = '/api/milantv'

// movie crud
movieRouter.get(APP_URL + '/movies', movieController.getMovie)
movieRouter.post(APP_URL + '/movies', adminAuthMiddleware, movieController.createMovie)
movieRouter.put(APP_URL + '/movies/:id', adminAuthMiddleware, movieController.updateMovie)
movieRouter.delete(APP_URL + '/movies/:id', adminAuthMiddleware, movieController.deleteMovie)


// movie actor cud
movieRouter.post(APP_URL + '/movies/:movId/actors', adminAuthMiddleware, movieActorController.createActor)
movieRouter.put(APP_URL + '/movies/:movId/actors/:actId', adminAuthMiddleware, movieActorController.updateActor)
movieRouter.delete(APP_URL + '/movies/:movId/actors/:actId', adminAuthMiddleware, movieActorController.deleteActor)

// genre crud
movieRouter.get(APP_URL + '/genres', genreController.getAllGenre)
movieRouter.post(APP_URL + '/genres/:id',adminAuthMiddleware, genreController.createGenre)
movieRouter.put(APP_URL + '/genres/:id',adminAuthMiddleware, genreController.updateGenre)
movieRouter.delete(APP_URL + '/genres/:id',adminAuthMiddleware, genreController.deleteGenre)

module.exports = movieRouter