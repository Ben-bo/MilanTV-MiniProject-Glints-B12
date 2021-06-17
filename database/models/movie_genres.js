"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie_genres extends Model {
    static associate(models) {
      this.belongsTo(models.Movies, {
        foreignKey: "movie_id",
      });

      this.belongsTo(models.Genres, {
        foreignKey: "genre_id",
      });
    }
  }
  Movie_genres.init(
    {
      movie_id: DataTypes.INTEGER,
      genre_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Movie_genres",
    }
  );
  return Movie_genres;
};
