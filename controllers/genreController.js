const genreService = require('../services/genreService')

const genreController = {
    getAllGenre: async (req, res) => {
        try {
            const result = await genreService.getAll()
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
    createGenre: async (req, res) => {
        const genreData = req.body.name
        try {
            const result = await genreService.create(genreData)
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
    updateGenre: async (req, res) => {
        const genreData = req.body.name
        const id = req.params.id
        try {
            const result = await genreService.update(genreData, id)
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
    deleteGenre: async (req, res) => {
        const id = req.params.id
        try {
            const result = await genreService.delete(id)
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

module.exports = genreController