const { body } = require("express-validator");

const authenticationSchema = [
  body("full_name")
    .exists({ checkFalsy: true })
    .withMessage("Full Name is Required"),
  body("email").isEmail().withMessage("Email Must Contain Valid Email Address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password Minimum 5 Character"),
];

module.exports = authenticationSchema;
