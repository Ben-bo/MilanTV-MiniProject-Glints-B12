const router = require("express").Router();

const reviewController = require("../controllers/reviewController");

router.get("/:id", reviewController.getReview);
router.delete("/:movie_id", reviewController.deleteReview);

module.exports = router;
