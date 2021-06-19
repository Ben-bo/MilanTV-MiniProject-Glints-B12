const express = require("express");
const route = express.Router();
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");
const userController = require("../controllers/userController");
const validateRequest = require("../middlewares/validateRequestMiddleware");

route.get(
  "/profile",
  authorizationMiddleware.adminAuthorization,
  userController.getUserProfile
);

route.put(
  "/profile/update",
  validateRequest.updateUserProfile,
  authorizationMiddleware.adminAuthorization,
  userController.updateUserProfile
);

route.put(
  "/profile/change/password",
  validateRequest.changePassword,
  authorizationMiddleware.adminAuthorization,
  userController.changePassword
);

module.exports = route;
