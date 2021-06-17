const {
    Movie_actors
} = require('../database/models')

const movieActorService = {
    create: async (actor) => {
        const res = await Movie_actors.create(actor)
        return res.id
    },
    update: async (actor, id) => {
        const res = await Movie_actors.update({
            character_name: actor.character_name,
            real_name: actor.real_name,
            photo_path: actor.photo_path
        }, {
            where: {
                id: id
            }
        })
        console.log(res)
        return res.id
    },
    delete: async(id) =>{
        const res = await Movie_actors.destroy({where: {id}})
        return res.id
    }
}

module.exports = movieActorService