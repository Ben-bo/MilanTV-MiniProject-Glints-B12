const express = require("express");
const route = express.Router();
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");
const userController = require("../controllers/userController");

route.get(
  "/profile",
  authorizationMiddleware.adminAuthorization,
  userController.getUserProfile
);

route.put(
  "/profile/update",
  authorizationMiddleware.adminAuthorization,
  userController.updateUserProfile
);

route.put(
  "/profile/change/password",
  authorizationMiddleware.adminAuthorization,
  userController.changePassword
);

module.exports = route;
