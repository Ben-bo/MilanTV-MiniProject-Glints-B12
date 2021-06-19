const bcrypt = require("bcrypt");
const Models = require("../database/models");

exports.register = async (req, res, next) => {
  try {
    const findUser = await Models.Users.findOne({
      where: { email: req.body.email },
    });

    if (findUser) {
      res.status(403).json({
        statusText: "Forbidden",
        message: "Guest Already Exist",
      });
    }

    const createUser = await Models.Users.create({
      ...req.body,
    });

    req.user = createUser;
    next();
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await Models.Users.findOne({
      where: { email: req.body.email },
    });

    if (user === null) {
      return res.status(401).json({
        statusText: "Unauthorized",
        message: "Email not found",
      });
    }

    await bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (!result) {
        return res.status(401).json({
          statusText: "Unauthorized",
          message: "Wrong Password",
        });
      }

      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message,
    });
  }
};
