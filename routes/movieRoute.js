const movieRouter = require("express").Router();
const movieActorController = require("../controllers/movieActorController");
const movieController = require("../controllers/movieController");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");
const validateRequest = require("../middlewares/validateRequestMiddleware");

// movie crud
movieRouter.get("/", movieController.getMovie);
movieRouter.post(
  "/",
  validateRequest.addAndUpdateMoview,
  authorizationMiddleware.adminAuthorization,
  movieController.createMovie
);
movieRouter.put(
  "/:id",
  validateRequest.addAndUpdateMoview,
  authorizationMiddleware.adminAuthorization,
  movieController.updateMovie
);
movieRouter.delete(
  "/:id",
  authorizationMiddleware.adminAuthorization,
  movieController.deleteMovie
);

// movie actor cud
movieRouter.post(
  "/:movId/actors",
  validateRequest.addAndUpdateActor,
  authorizationMiddleware.adminAuthorization,
  movieActorController.createActor
);
movieRouter.put(
  "/:movId/actors/:actId",
  validateRequest.addAndUpdateActor,
  authorizationMiddleware.adminAuthorization,
  movieActorController.updateActor
);
movieRouter.delete(
  "/:movId/actors/:actId",
  authorizationMiddleware.adminAuthorization,
  movieActorController.deleteActor
);

module.exports = movieRouter;
