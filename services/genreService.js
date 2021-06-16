const {
    Genres
} = require('../database/models')

const genreService = {
    getAll: async () => {
        const res = await Genres.findAll()
        return res
    },
    create: async (name) => {
        const res = await Genres.create({name})
        return res.id
    },
    update: async (name, id) => {
        const res = await Genres.update({
            name
        }, {
            where: {
                id:id
            }
        })
        return res
    },
    delete: async (id) => {
        const res = await Genres.destroy({
            where: {
                id
            }
        })
        return res.id
    }
}

module.exports = genreService