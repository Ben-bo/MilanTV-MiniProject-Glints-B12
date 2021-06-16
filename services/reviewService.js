const { Reviews: reviewsModel } = require("../database/models");
const { Op } = require("sequelize");
const reviewService = {};
reviewService.create = async (payload) => {
  try {
    let error = null;
    let result = {};
    const dataReview = {
      review: payload.review,
      rating: payload.rating,
      user_id: payload.decodedToken.id,
      movie_id: payload.idMovie,
    };
    const cekReview = await reviewsModel.findOne({
      where: {
        [Op.and]: [
          { user_id: dataReview.user_id },
          { movie_id: dataReview.movie_id },
        ],
      },
    });
    if (cekReview) {
      error = "you have reviewed this movie, choose another one";
    } else {
      result = await reviewsModel.create(dataReview);
    }

    return {
      data: result,
      error,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
module.exports = reviewService;
