const jwt = require("jsonwebtoken");
const joi = require("joi");

const reviewMiddleware = {};
reviewMiddleware.validation = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const schema = joi
      .object({
        authorization: joi.string().required(),
        rating: joi.string().required(),
        user_id: joi.string().required(),
        movie_id: joi.string().required(),
      })
      .options({ abortEarly: false });
    const validate = await schema.validate({ authorization: token });
    if (validate.error) {
      res.send({
        status: 500,
        message: "missing token",
        data: validate.error.details,
      });
    }
    const decodedToken = await jwt.verify(token, "secret_key");
    req.body.decodedToken = decodedToken;
    const idMovie = req.params.movie_id;
    req.body.idMovie = idMovie;

    next();
  } catch (error) {
    console.log(error);
    res.send({
      status: 500,
      message: "invalid token",
      data: error,
    });
  }
};

module.exports = reviewMiddleware;
