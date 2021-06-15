const router = require("express").Router();
const reviewMiddleware = require("../middlewares/reviewMiddleware");
const reviewController = require("../controllers/reviewController");

router.post(
  "/review/:moview_id",
  reviewMiddleware.validation,
  reviewController.create
);

module.exports = router;
