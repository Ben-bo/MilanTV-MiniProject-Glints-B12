const router = require("express").Router();
const validateRequest = require("../middlewares/validateRequestMiddleware");
const reviewController = require("../controllers/reviewController");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");

router.post(
  "/:movie_id",
  authorizationMiddleware.userAuthorization,
  validateRequest.addReview,
  reviewController.create
);

module.exports = router;
