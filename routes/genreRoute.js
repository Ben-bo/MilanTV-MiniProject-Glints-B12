const genreRouter = require("express").Router();
const genreController = require("../controllers/genreController");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");
const validateRequest = require("../middlewares/validateRequestMiddleware");

// genre crud
genreRouter.get("/", genreController.getAllGenre);
genreRouter.post(
  "/",
  validateRequest.addAndUpdateGenre,
  authorizationMiddleware.adminAuthorization,
  genreController.createGenre
);
genreRouter.put(
  "/:id",
  validateRequest.addAndUpdateGenre,
  authorizationMiddleware.adminAuthorization,
  genreController.updateGenre
);
genreRouter.delete(
  "/:id",
  authorizationMiddleware.adminAuthorization,
  genreController.deleteGenre
);

module.exports = genreRouter;
