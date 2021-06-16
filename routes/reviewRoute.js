const router = require("express").Router();
const reviewMiddleware = require("../middlewares/reviewMiddleware");
const reviewController = require("../controllers/reviewController");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");

router.post(
  "/:movie_id",
  authorizationMiddleware.userAuthorization,
  reviewMiddleware.validation,
  reviewController.create
);

module.exports = router;
