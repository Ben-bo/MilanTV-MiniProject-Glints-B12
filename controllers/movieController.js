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
    showMovie: async (req, res) => {
        try {
            const result = await movieService.show(req.params.id)
            console.log(result)
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
    getAllMovieReview: async(req, res) =>{
        const page = Number.parseInt(req.query.page)
        const size = Number.parseInt(req.query.size)
        // const pageAsNumber = Number.parseInt(req.query.page)
        // const sizeAsNumber = Number.parseInt(req.query.size)
        // if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
        //     page = pageAsNumber
        // }else{
        //     throw "page format is not valid"
        // }
        // if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0){
        //     size = sizeAsNumber
        // }else{
        //     throw "size is not valid"
        // }
        try {
            const result = await movieService.getAllReview(req.params.id, page, size)
            res.send({
                status: 200,
                message: 'success',
                data: result
            })
        } catch (err) {
            console.log(err)
            res.send({
                status: 500,
                message: "invalid input",
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