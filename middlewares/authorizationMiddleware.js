const jwt = require("jsonwebtoken");
const Models = require("../database/models");

exports.userAuthorization = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.replace("Bearer", "");

    if (token === null)
      return res
        .status(401)
        .json({ statusText: "Unauthorized", message: "Token Is Null" });

    await jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
      if (err)
        return res.status(403).json({
          statusText: "Forbiden",
          message: "Token Invalid or Expired",
        });

      const userData = await Models.Users.findByPk(data.user.id);

      if (userData.role !== 1)
        return res
          .status(403)
          .json({ statusText: "Forbiden", message: "Cannot Access" });

      req.user = userData;
      next();
    });
  } catch (error) {
    return res
      .status(500)
      .json({ statusText: "Internal Server Error", message: error.message });
  }
};

exports.adminAuthorization = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.replace("Bearer", "");

    if (token === null)
      return res
        .status(401)
        .json({ statusText: "Unauthorized", message: "Token Is Null" });

    await jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
      if (err)
        return res.status(403).json({
          statusText: "Forbiden",
          message: "Token Invalid or Expired",
        });

      const userData = await Models.Users.findByPk(data.user.id);

      if (userData.role !== 0)
        return res
          .status(403)
          .json({ statusText: "Forbiden", message: "Cannot Access" });

      req.user = userData;
      next();
    });
  } catch (error) {
    return res
      .status(500)
      .json({ statusText: "Internal Server Error", message: error.message });
  }
};
