const jwt = require("jsonwebtoken");

exports.getToken = async (req, res) => {
  try {
    const token = jwt.sign(
      { user: { id: req.user.id } },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      statusText: "Created",
      token,
    });
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: error.message,
    });
  }
};
