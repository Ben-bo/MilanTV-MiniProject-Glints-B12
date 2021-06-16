"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    static associate(models) {
      this.hasOne(models.Movie_directors, {
        foreignKey: "id",
      });

      this.hasMany(models.Movie_genres, {
        foreignKey: "movie_id",
      });
      this.hasMany(models.Movie_actors, {
        foreignKey: "movie_id",
      });

      this.hasMany(models.Watchlists, {
        foreignKey: "id",
      });
    }
  }
  Movies.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: DataTypes.STRING,
      synopsis: DataTypes.STRING,
      release_date: DataTypes.DATE,
      featured_song: DataTypes.STRING,
      budget: DataTypes.INTEGER,
      language: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      poster_path: DataTypes.STRING,
      trailer_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movies",
    }
  );
  return Movies;
};
