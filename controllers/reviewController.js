const reviewService = require("../services/reviewService");
const reviewController = {};

reviewController.create = async (req, res) => {
  try {
    let status = 200;
    let message = "SUCCESS";
    let data = {};

    const { data: createReview, error } = await eventService.create(req.body);

    res.status(200).send({
      status,
      message,
      data: createReview || data,
    });
  } catch (error) {
    console.log(error);
    res.send({ status: 500, message: "failed", data: error });
  }
};
module.exports = reviewController;
