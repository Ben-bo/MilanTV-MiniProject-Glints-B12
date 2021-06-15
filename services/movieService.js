const {Movies} = require('../database/models')

const movieService = {
    getAll: async () =>{
        const res = await Movies.findAll()
        return res
    }
}


module.exports = movieService