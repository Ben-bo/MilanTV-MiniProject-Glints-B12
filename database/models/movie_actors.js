"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie_actors extends Model {
    static associate(models) {
      this.belongsTo(models.Movies, {
        foreignKey: "movie_id",
        targetKey: "id",
      });
    }
  }
  Movie_actors.init(
    {
      movie_id: DataTypes.INTEGER,
      character_name: DataTypes.STRING,
      real_name: DataTypes.STRING,
      photo_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie_actors",
    }
  );
  return Movie_actors;
};
