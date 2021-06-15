const movieRouter = require('express').Router()
const movieController = require('../controllers/movieController')
movieRouter.get('/movies', movieController.getMovies)

module.exports = movieRouter