const movieService = require('../services/movieService')

const movieController = {
    getMovie: async (req, res) => {
        try {
            const result = await movieService.getAll()
            // console.log(result)
            res.send({
                status: 200,
                message: 'success',
                data: result
            })
        } catch (err) {
            console.log(err)
            res.send({
                status: 500,
                message: err,
                data: []
            })
        }
    },
    createMovie: async (req, res) => {
        const movieData = req.body
        try {
            const result = await movieService.create(movieData)
            res.send({
                status: 200,
                message: 'success',
                data: result
            })
        } catch (err) {
            res.send({
                status: 500,
                message: err,
                data: []
            })
        }
    },
    updateMovie: async (req, res) => {
        const movieData = req.body
        const id = req.params.id
        try {
            const result = await movieService.update(movieData, id)
            res.send({
                status: 200,
                message: 'success',
                data: []
            })
        } catch (err) {
            res.send({
                status: 500,
                message: err,
                data: []
            })
        }
    },
    deleteMovie: async (req, res) => {
        const id = req.params.id
        try {
            const result = await movieService.delete(id)
            res.send({
                status: 200,
                message: 'success',
                data: []
            })
        } catch (err) {
            res.send({
                status: 500,
                message: err,
                data: []
            })
        }
    }
}


module.exports = movieController