"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    static associate(models) {
      Reviews.belongsTo(models.Users, {
        foreignKey: "user_id",
        targetKey: "id",
      });
      Reviews.belongsTo(models.Movies, {
        foreignKey: "movie_id",
        targetKey: "id",
      });
    }
  }
  Reviews.init(
    {
      review: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      movie_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reviews",
    }
  );
  return Reviews;
};
