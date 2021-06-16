const express = require("express");
const route = express.Router();
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");
const userController = require("../controllers/userController");

route.get(
  "/profile",
  authorizationMiddleware.userAuthorization,
  userController.getUserProfile
);

route.put(
  "/profile/update",
  authorizationMiddleware.userAuthorization,
  userController.updateUserProfile
);

route.put(
  "/profile/change/password",
  authorizationMiddleware.userAuthorization,
  userController.changePassword
);

module.exports = route;
