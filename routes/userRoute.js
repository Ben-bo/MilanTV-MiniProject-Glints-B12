const express = require("express");
const route = express.Router();
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");
const userController = require("../controllers/userController");
const validateRequest = require("../middlewares/validateRequestMiddleware");

route.get(
  "/profile",
  authorizationMiddleware.userAuthorization,
  userController.getUserProfile
);

route.put(
  "/profile/update",
  validateRequest.updateUserProfile,
  authorizationMiddleware.userAuthorization,
  userController.updateUserProfile
);

route.put(
  "/profile/change/password",
  validateRequest.changePassword,
  authorizationMiddleware.userAuthorization,
  userController.changePassword
);

module.exports = route;
