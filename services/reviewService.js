const { Reviews: reviewsModel } = require("../database/models");
const reviewService = {};
reviewService.create = async (payload) => {
  try {
    const dataReview = {
      review: payload.review,
      rating: payload.rating,
      user_id: payload.decodedToken.id,
      movie_id: payload.idMovie.id,
    };
    let error = null;
    let result = await reviewsModel.create(dataReview);

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
