const {
    Movies,
    Movie_genres,
    Movie_actors
} = require('../database/models')

const movieService = {
    getAll: async () => {
        const res = await Movies.findAll()
        return res
    },
    create: async (movieData) => {
        let genreMovie = JSON.parse(movieData.genre)
        delete movieData.genre
        const resMovie = await Movies.create(movieData)
        genreMovie = genreMovie.map(el => {
            return {
                movie_id: resMovie.id,
                genre_id: el
            }
        });
        const resGenreMovieData = await Movie_genres.bulkCreate(genreMovie)
        return resMovie.id
    },
    update: async (movieData, id) => {
        let genreMovie = JSON.parse(movieData.genre)
        delete movieData.genre
        const resMovie = await Movies.update(movieData, {
            where: {
                id
            }
        })
        genreMovie = genreMovie.map(el => {
            return {
                movie_id: id,
                genre_id: el
            }
        });
        const delGenreMovieData = await Movie_genres.destroy({
            where: {
                movie_id: id
            }
        })
        const resGenreMovieData = await Movie_genres.bulkCreate(genreMovie)
        return resMovie.id
    },
    delete: async (id) => {
        const delGenreMovieData = await Movie_genres.destroy({
            where: {
                movie_id: id
            }
        })
        const delActor = await Movie_actors.destroy({
            where: {
                movie_id:id
            }
        })
        const res = await Movies.destroy({
            where: {
                id
            }
        })
        return res.id
    }
}


module.exports = movieService