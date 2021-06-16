const Models = require("../database/models");
const bcrypt = require("bcrypt");
exports.getUserProfile = async (req, res) => {
  try {
    res.status(200).json({
      statusText: "Ok",
      message: "Success Get User Profile",
      data: {
        full_name: req.user.full_name,
        email: req.user.email,
        photo_path: req.user.photo_path,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ statusText: "Internal Server Error", message: error.message });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    if (req.body.password)
      return res.status(400).json({
        statusText: "Bad Request",
        message: "Use Another API to Change Password",
      });

    await Models.Users.update(
      { ...req.body },
      {
        where: { id: req.user.id },
      }
    );

    res.status(200).json({
      statusCode: 201,
      statusText: "Created",
      message: "Success update User Data",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ statusText: "Internal Server Error", message: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    if (
      req.body.password &&
      req.body.new_password &&
      req.body.confirm_password
    ) {
      await bcrypt.compare(
        req.body.password,
        req.user.password,
        async (err, result) => {
          if (!result) {
            return res.status(401).json({
              statusText: "Unauthorized",
              message: "Wrong Password",
            });
          }

          if (req.body.new_password !== req.body.confirm_password) {
            return res.status(400).json({
              statusText: "Bad Request",
              message: "Password and Confirm Password Doesn't Match",
            });
          }

          await Models.Users.update(
            { password: req.body.new_password },
            {
              where: { id: req.user.id },
            }
          );

          res.status(200).json({
            statusCode: 201,
            statusText: "Created",
            message: "Password Has Been Updated",
          });
        }
      );
    }
  } catch (error) {
    return res
      .status(500)
      .json({ statusText: "Internal Server Error", message: error.message });
  }
};
