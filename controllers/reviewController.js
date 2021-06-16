const Models = require("../database/models");
const reviews = require("../database/models/reviews");

// Show Review
exports.getReview = async (req, res) => {
  try {
    const reviews = await Models.Reviews.findAll({
      limit: req.query.limit,
      offset: req.query.offset,
      where: { movie_id: req.params.id },
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
exports.deleteReview = async (req, res) => {
  try {
    const checkReview = await Models.Reviews.findOne({
      where: { movie_id: req.params.id },
    });
    if (checkReview) {
      console.log(checkReview);
      await Models.Reviews.destroy({
        where: { movie_id: req.params.id },
      });
      res.status(200).json({
        statustext: "Deleted",
        message: "Movie Review Was Deleted",
        data: {
          ...reviews,
        },
      });
    }
  } catch (error) {
    return res.status(500).json({
      statustext: "Review ID Doesn't Exist",
      error: error.message,
    });
  }
};
