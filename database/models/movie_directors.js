"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie_directors extends Model {
    static associate(models) {
      this.belongsTo(models.Movies, {
        foreignKey: "movie_id",
        targetKey: "id",
      });
    }
  }
  Movie_directors.init(
    {
      movie_id: DataTypes.INTEGER,
      director_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie_directors",
    }
  );
  return Movie_directors;
};
