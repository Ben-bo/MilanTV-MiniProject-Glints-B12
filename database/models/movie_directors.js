"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie_directors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
