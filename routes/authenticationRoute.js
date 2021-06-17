const express = require("express");
const route = express.Router();
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");
const authenticationController = require("../controllers/authenticationController");
const validateRequest = require("../middlewares/validateRequestMiddleware");

route.post(
  "/auth/register",
  validateRequest.register,
  authenticationMiddleware.register,
  authenticationController.getToken
);

route.post(
  "/auth/login",
  validateRequest.login,
  authenticationMiddleware.login,
  authenticationController.getToken
);

module.exports = route;
