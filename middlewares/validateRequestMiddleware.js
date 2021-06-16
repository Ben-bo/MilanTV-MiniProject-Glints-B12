const { validationResult } = require("express-validator");

exports.validateRequestSchema = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ statusText: "Bad Request", errors: errors.array() });
  }
  next();
};
