'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie_actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie_actors.init({
    movie_id: DataTypes.INTEGER,
    character_name: DataTypes.STRING,
    real_name: DataTypes.STRING,
    photo_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie_actors',
  });
  return Movie_actors;
};