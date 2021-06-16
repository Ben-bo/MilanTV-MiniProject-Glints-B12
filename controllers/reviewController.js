const reviewService = require("../services/reviewService");
const reviewController = {};

reviewController.create = async (req, res) => {
  try {
    let status = 200;
    let message = "SUCCESS";
    let data = {};

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
