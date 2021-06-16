const router = require("express").Router();
const reviewMiddleware = require("../middlewares/reviewMiddleware");
const reviewController = require("../controllers/reviewController");

router.post("/:movie_id", reviewMiddleware.validation, reviewController.create);

module.exports = router;