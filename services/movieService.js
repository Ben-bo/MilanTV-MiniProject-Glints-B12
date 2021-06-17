const {
  Movies,
  Movie_genres,
  Movie_actors,
  Movie_directors,
  Genres,
  Reviews,
  Users,
  sequelize,
} = require("../database/models");
const movie_directors = require("../database/models/movie_directors");

const Op = require("sequelize").Op;

const movieService = {
  getAll: async (page, size, genreId) => {
    if (genreId == "all") {
      var res = await Movie_genres.findAndCountAll({
        limit: size,
        offset: (page - 1) * size,
        include: [
          {
            model: Genres,
          },
          {
            model: Movies,
            attributes: ["id", "title", "poster_path"],
          },
        ],
      });
    } else {
      var res = await Movie_genres.findAndCountAll({
        where: {
          genre_id: genreId,
        },
        limit: size,
        offset: (page - 1) * size,
        include: [
          {
            model: Genres,
          },
          {
            model: Movies,
            attributes: ["id", "title", "poster_path"],
          },
        ],
      });
    }
    const respon = {
      totalItems: res.count,
      ...res,
      totalPages: Math.round(res.count / size),
      currentPage: page,
    };
    return respon;
  },
  show: async (id) => {
    const res = await Movies.findAll({
      where: {
        id,
      },
      include: [
        {
          model: Movie_genres,
          attributes: ["id"],
          include: {
            model: Genres,
            attributes: ["name"],
          },
        },
        {
          model: Movie_actors,
        },
        {
          model: Movie_directors,
        },
      ],
    });
    const avgRating = await Reviews.findAll({
      where: {
        movie_id: id,
      },
      attributes: [
        "movie_id",
        [sequelize.fn("AVG", sequelize.col("rating")), "avg_rating"],
      ],
      raw: true,
      group: ["movie_id"],
    });
    let respon = res[0];
    respon.dataValues["avg_rating"] = avgRating[0];
    return respon;
  },
  // avgReviewRating: async (id) => {
  //     const avgRating = await Reviews.findAll({
  //         attributes: [
  //             'movie_id',
  //             [sequelize.fn('AVG', sequelize.col('rating')), 'avg_rating'],
  //         ],
  //         raw: true,
  //         group: ['movie_id']
  //     })
  //     return avgRating[0]
  // },
  searchMovie: async (keyword) => {
    const res = await Movies.findAll({
      where: {
        title: {
          [Op.iLike]: "%" + keyword + "%",
        },
      },
    });
    return res;
  },
  getAllReview: async (id, page, size) => {
    const res = await Reviews.findAndCountAll({
      limit: size,
      offset: (page - 1) * size,
      where: {
        movie_id: id,
      },
      include: [
        {
          model: Users,
          attributes: ["full_name", "photo_path"],
        },
      ],
    });
    const respon = {
      totalItems: res.count,
      ...res,
      totalPages: Math.round(res.count / size),
      currentPage: page,
    };
    return respon;
  },
  create: async (movieData) => {
    let genreMovie = JSON.parse(movieData.genre);
    let directorMovie = JSON.parse(movieData.director);
    delete movieData.genre;
    delete movieData.director;
    const resMovie = await Movies.create(movieData);
    genreMovie = genreMovie.map((el) => {
      return {
        movie_id: resMovie.id,
        genre_id: el,
      };
    });
    directorMovie = directorMovie.map((el) => {
      return {
        movie_id: resMovie.id,
        director_name: el,
      };
    });

    const resGenreMovieData = await Movie_genres.bulkCreate(genreMovie);
    const resDirectorMovieData = await Movie_directors.bulkCreate(
      directorMovie
    );
    return resMovie.id;
  },
  update: async (movieData, id) => {
    let genreMovie = JSON.parse(movieData.genre);
    let directorMovie = JSON.parse(movieData.director);
    delete movieData.genre;
    delete movieData.director;
    const resMovie = await Movies.update(movieData, {
      where: {
        id,
      },
    });
    genreMovie = genreMovie.map((el) => {
      return {
        movie_id: id,
        genre_id: el,
      };
    });
    directorMovie = directorMovie.map((el) => {
      return {
        movie_id: id,
        director_name: el,
      };
    });
    const delGenreMovieData = await Movie_genres.destroy({
      where: {
        movie_id: id,
      },
    });
    const resGenreMovieData = await Movie_genres.bulkCreate(genreMovie);

    const delDirectorMovieData = await Movie_directors.destroy({
      where: {
        movie_id: id,
      },
    });
    const resDirectorMovieData = await Movie_directors.bulkCreate(
      directorMovie
    );

    return resMovie.id;
  },
  delete: async (id) => {
    const delGenreMovieData = await Movie_genres.destroy({
      where: {
        movie_id: id,
      },
    });
    const delActor = await Movie_actors.destroy({
      where: {
        movie_id: id,
      },
    });
    const res = await Movies.destroy({
      where: {
        id,
      },
    });
    return res.id;
  },
};

module.exports = movieService;
