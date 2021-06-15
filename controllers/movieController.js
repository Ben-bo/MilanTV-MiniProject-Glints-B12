const movieService = require('../services/movieService')
const jwt = require('jsonwebtoken');


const movieController = {
    getMovies: async (req, res) => {
        try {
            const result = await movieService.getAll()
            console.log(result)
            res.send({
                status: 200,
                message: 'success',
                data: result
            })
        } catch (err) {
            console.log(err)
            res.send({
                status: 400,
                message: 'errorrr'
            })
        }
    }
}


module.exports = movieController