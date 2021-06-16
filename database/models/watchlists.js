"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Watchlists extends Model {
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: "user_id",
        targetKey: "id",
      });

      this.belongsTo(models.Movies, {
        foreignKey: "movie_id",
        targetKey: "id",
      });
    }
  }
  Watchlists.init(
    {
      user_id: DataTypes.INTEGER,
      movie_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Watchlists",
    }
  );
  return Watchlists;
};
