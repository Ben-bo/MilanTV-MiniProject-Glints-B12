"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
