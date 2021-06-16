const router = require("express").Router();
const reviewMiddleware = require("../middlewares/reviewMiddleware");
const reviewController = require("../controllers/reviewController");

router.post("/:movie_id", reviewMiddleware.validation, reviewController.create);
router.put(
  "/update/:review_id",
  reviewMiddleware.validation,
  reviewController.update
);

module.exports = router;
