const express = require("express");
const route = express.Router();
const authenticationMiddleware = require("../middlewares/authenticationMiddleware");
const authenticationController = require("../controllers/authenticationController");
const authenticationSchema = require("../schema/authenticationSchema");
const {
  validateRequestSchema,
} = require("../middlewares/validateRequestMiddleware");

route.post(
  "/auth/register",
  authenticationSchema,
  validateRequestSchema,
  authenticationMiddleware.register,
  authenticationController.getToken
);

route.get(
  "/auth/login",
  authenticationSchema[1],
  authenticationSchema[2],
  validateRequestSchema,
  authenticationMiddleware.login,
  authenticationController.getToken
);

module.exports = route;
