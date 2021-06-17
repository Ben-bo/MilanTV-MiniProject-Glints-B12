const movieActorService = require('../services/movieActorService')

const movieActorController = {
    createActor: async (req, res) => {
        const movieActor = {
            ...req.body,
            movie_id: req.params.movId
        }
        console.log(movieActor)
        try {
            const result = await movieActorService.create(movieActor)
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
    updateActor: async (req, res) => {
        const movieActor = {
            ...req.body
        }
        const id = req.params.actId
        try {
            const result = await movieActorService.update(movieActor, id)
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
    deleteActor: async (req, res) => {
        const id = req.params.actId
        try {
            const result = await movieActorService.delete(id)
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

module.exports = movieActorController