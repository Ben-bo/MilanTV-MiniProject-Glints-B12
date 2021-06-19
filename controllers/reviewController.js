const reviewService = require("../services/reviewService");
const Op = require("sequelize").Op;
const { Reviews: reviewsModel } = require("../database/models");
const reviewController = {};

// Show Review
reviewController.get = async (req, res) => {
  try {
    const reviews = await reviewsModel.findAll({
      limit: req.query.limit,
      offset: req.query.offset,
      where: { movie_id: req.params.movie_id },
    });
    console.log(reviews);
    res.status(200).json({
      statustext: "Ok",
      message: "Get Movie Review",
      data: {
        ...reviews,
      },
    });
  } catch (error) {
    return res.status(500).json({
      statustext: "Internal Server Error",
      error: error.message,
    });
  }
};

// Delete Review
reviewController.delete = async (req, res) => {
  try {
    const checkReview = await reviewsModel.findOne({
      where: {
        [Op.and]: [{ user_id: req.user.id }, { movie_id: req.params.movie_id }],
      },
    });
    console.log(checkReview);
    if (checkReview) {
      await reviewsModel.destroy({
        where: {
          [Op.and]: [
            { user_id: req.user.id },
            { movie_id: req.params.movie_id },
          ],
        },
      });
      res.status(200).json({
        statustext: "Deleted",
        message: "Movie Review Was Deleted",
        data: {},
      });
    }
  } catch (error) {
    return res.status(500).json({
      statustext: "Review ID Doesn't Exist",
      error: error.message,
    });
  }
};

reviewController.create = async (req, res) => {
  try {
    let status = 200;
    let message = "SUCCESS";
    let data = {};
    console.log(req.body);
    const { data: createReview, error } = await reviewService.create(req.body);
    if (error !== null) {
      (status = 500), (message = error);
    }
    res.status(status).send({
      status,
      message,
      data: createReview || data,
    });
  } catch (error) {
    console.log(error);
    res.send({ status: 500, message: "failed", data: error });
  }
};

reviewController.update = async (req, res) => {
  try {
    let status = 200;
    let message = "SUCCESS";
    let data = {};

    const { data: updateReview, error } = await reviewService.update(req.body);
    if (error !== null) {
      (status = 500), (message = error);
    }
    res.status(status).send({
      status,
      message,
      data: updateReview || data,
    });
  } catch (error) {
    console.log(error);
    res.send({ status: 500, message: "failed", data: error });
  }
};
module.exports = reviewController;
