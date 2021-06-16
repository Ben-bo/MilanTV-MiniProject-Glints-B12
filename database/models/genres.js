"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    static associate(models) {
      this.hasMany(models.Movie_genres, {
        foreignKey: "id",
      });
    }
  }
  Genres.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Genres",
    }
  );
  return Genres;
};
