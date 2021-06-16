const genreRouter = require('express').Router()
const genreController = require('../controllers/genreController')
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");

// genre crud
genreRouter.get('/', genreController.getAllGenre)
genreRouter.post('/:id',authorizationMiddleware.adminAuthorization, genreController.createGenre)
genreRouter.put('/:id',authorizationMiddleware.adminAuthorization, genreController.updateGenre)
genreRouter.delete('/:id',authorizationMiddleware.adminAuthorization, genreController.deleteGenre)

module.exports = genreRouter